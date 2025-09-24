/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { GoogleGenAI } from "@google/genai";

// --- CONFIGURATION & CONSTANTS --- //

// Initialize the Google AI client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const translations = {
  en: {
    startTitle: "What should we design today?",
    startSubtitle: "Create amazing designs for your labels and products.",
    startBtn: "Design Your Label Now",
    aiDesignerTitle: "Lily Label AI Designer",
    toggleLang: 'العربية',
    createYourDesign: 'Create Your Design',
    productType: '1. Select Product Type',
    sticker: 'Book & Notebook Labels',
    notebook: 'Notebook',
    lunchbox: 'Lunch Box',
    wristpad: 'Wristpad',
    id_tag: 'ID for Neck & Bags',
    customizeText: 'Customize Your Text',
    studentName: "2. Student's Name",
    grade: '3. Grade',
    'grade-kg1': 'KG 1', 'grade-kg2': 'KG 2', 'grade-1': 'Grade 1', 'grade-2': 'Grade 2', 'grade-3': 'Grade 3', 'grade-4': 'Grade 4', 'grade-5': 'Grade 5', 'grade-6': 'Grade 6', 'grade-7': 'Grade 7', 'grade-8': 'Grade 8', 'grade-9': 'Grade 9', 'grade-10': 'Grade 10', 'grade-11': 'Grade 11', 'grade-12': 'Grade 12', 'grade-other': 'Other',
    year: '4. School Year',
    fontFamily: 'Font',
    fontSize: 'Font Size',
    fontColor: 'Font Color',
    addToCart: 'Add to Cart',
    back: 'Back',
    enterDetails: 'Enter Your Details',
    continue: 'Find Designs',
    suggestionsTitle: 'Choose a Design',
    generatingDesigns: 'Generating your unique designs...',
    uploadYourImage: 'Upload Your Image',
    selectImage: 'Select Image',
    confirmAndContinue: 'Confirm and Continue',
    selectFont: 'Select a Font',
    cartTitle: 'Your Cart',
    emptyCart: 'Your cart is empty.',
    checkout: 'Complete Order via WhatsApp',
    totalPrice: 'Total Price:',
    removeItem: 'Remove',
    errorPrefix: 'Oops!',
    errorText: 'Something went wrong. Please try again.',
    nameRequired: 'Please enter a name.',
    sampleText: 'Sample Text',
    whatsappMessageHeader: 'Hello Lily Label, I would like to order the following items:',
    product: 'Product',
    name: 'Name',
    price: 'Price',
    total: 'Total',
  },
  ar: {
    startTitle: "ماذا سنصمم اليوم؟",
    startSubtitle: "ابتكر تصميمات رائعة لملصقاتك ومنتجاتك.",
    startBtn: "صمم ملصقك الآن",
    aiDesignerTitle: "مصمم ليلي ليبل الذكي",
    toggleLang: 'English',
    createYourDesign: 'أنشئ تصميمك',
    productType: '١. اختر نوع المنتج',
    sticker: 'ملصقات كتب ودفاتر',
    notebook: 'دفتر',
    lunchbox: 'صندوق طعام',
    wristpad: 'مسند معصم',
    id_tag: 'بطاقة تعريفية للرقبة والحقائب',
    customizeText: 'تخصيص النص',
    studentName: '٢. اسم الطالب',
    grade: '٣. الصف الدراسي',
    'grade-kg1': 'تمهيدي أول', 'grade-kg2': 'تمهيدي ثاني', 'grade-1': 'الصف الأول', 'grade-2': 'الصف الثاني', 'grade-3': 'الصف الثالث', 'grade-4': 'الصف الرابع', 'grade-5': 'الصف الخامس', 'grade-6': 'الصف السادس', 'grade-7': 'الصف السابع', 'grade-8': 'الصف الثامن', 'grade-9': 'الصف التاسع', 'grade-10': 'الصف العاشر', 'grade-11': 'الصف الحادي عشر', 'grade-12': 'الصف الثاني عشر', 'grade-other': 'أخرى',
    year: '٤. العام الدراسي',
    fontFamily: 'الخط',
    fontSize: 'حجم الخط',
    fontColor: 'لون الخط',
    addToCart: 'أضف إلى السلة',
    back: 'رجوع',
    enterDetails: 'أدخل بياناتك',
    continue: 'ابحث عن تصاميم',
    suggestionsTitle: 'اختر تصميمًا',
    generatingDesigns: 'جاري إنشاء تصميماتك الفريدة...',
    uploadYourImage: 'ارفع صورة',
    selectImage: 'اختر صورة',
    confirmAndContinue: 'تأكيد ومتابعة',
    selectFont: 'اختر خطًا',
    cartTitle: 'سلة التسوق',
    emptyCart: 'سلة التسوق فارغة.',
    checkout: 'إتمام الطلب عبر واتساب',
    totalPrice: 'السعر الإجمالي:',
    removeItem: 'إزالة',
    errorPrefix: 'عفوًا!',
    errorText: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    nameRequired: 'الرجاء إدخال الاسم.',
    sampleText: 'نص تجريبي',
    whatsappMessageHeader: 'مرحباً ليلي ليبل، أود طلب المنتجات التالية:',
    product: 'المنتج',
    name: 'الاسم',
    price: 'السعر',
    total: 'الإجمالي',
  },
};

const fonts = [
  { name: 'Nunito', style: "'Nunito', sans-serif" },
  { name: 'Cairo', style: "'Cairo', sans-serif" },
  { name: 'Roboto', style: "'Roboto', sans-serif" },
  { name: 'Lato', style: "'Lato', sans-serif" },
  { name: 'Montserrat', style: "'Montserrat', sans-serif" },
  { name: 'Oswald', style: "'Oswald', sans-serif" },
];

const productPrices = {
  sticker: 5,
  notebook: 15,
  lunchbox: 25,
  wristpad: 12,
  id_tag: 10,
};

// --- STATE MANAGEMENT --- //
const state = {
  lang: 'ar',
  currentScreen: 'start',
  selectedProduct: null,
  studentInfo: { name: '', grade: '', year: '' },
  cart: [],
  fabricCanvas: null,
  activeText: null,
  isCanvasInitialized: false,
};

// --- DOM ELEMENTS --- //
const DOMElements = {
  startScreen: document.getElementById('start-screen') as HTMLElement,
  mainEditor: document.getElementById('main-editor') as HTMLElement,
  infoModal: document.getElementById('info-modal') as HTMLElement,
  imageGalleryModal: document.getElementById('image-gallery-modal') as HTMLElement,
  uploadModal: document.getElementById('upload-modal') as HTMLElement,
  fontModal: document.getElementById('font-modal') as HTMLElement,
  cartModal: document.getElementById('cart-modal') as HTMLElement,
  canvasEl: document.getElementById('design-canvas') as HTMLCanvasElement,
  langSwitcher: document.getElementById('lang-switcher') as HTMLElement,
  studentNameInput: document.getElementById('student-name') as HTMLInputElement,
  fontSizeSlider: document.getElementById('font-size') as HTMLInputElement,
  fontSizeValue: document.getElementById('font-size-value') as HTMLElement,
  fontColorInput: document.getElementById('font-color') as HTMLInputElement,
  fontFamilyBtn: document.getElementById('font-family-btn') as HTMLButtonElement,
  addToCartBtn: document.getElementById('add-to-cart-btn') as HTMLButtonElement,
  imageGalleryGrid: document.getElementById('image-gallery-grid') as HTMLElement,
  galleryLoader: document.getElementById('gallery-loader') as HTMLElement,
  galleryUserInfo: document.getElementById('gallery-user-info') as HTMLElement,
  uploadImageBtn: document.getElementById('upload-image-btn') as HTMLButtonElement,
  uploadInput: document.getElementById('image-upload-input') as HTMLInputElement,
  imagePreviewContainer: document.getElementById('image-preview-container') as HTMLElement,
  imagePreview: document.getElementById('image-preview') as HTMLImageElement,
  confirmUploadBtn: document.getElementById('confirm-upload-btn') as HTMLButtonElement,
  infoNameInput: document.getElementById('info-name') as HTMLInputElement,
  infoGradeSelect: document.getElementById('info-grade') as HTMLSelectElement,
  infoYearSelect: document.getElementById('info-year') as HTMLSelectElement,
  submitInfoBtn: document.getElementById('submit-info-btn') as HTMLButtonElement,
  cartBtn: document.getElementById('cart-btn') as HTMLButtonElement,
  cartCount: document.getElementById('cart-count') as HTMLElement,
  cartItemsContainer: document.getElementById('cart-items') as HTMLElement,
  cartFooter: document.getElementById('cart-footer') as HTMLElement,
  cartTotalPrice: document.getElementById('cart-total-price') as HTMLElement,
  emptyCartMsg: document.getElementById('empty-cart-msg') as HTMLElement,
  checkoutBtn: document.getElementById('checkout-btn') as HTMLButtonElement,
  fontList: document.getElementById('font-list') as HTMLElement,
  backBtn: document.getElementById('back-btn') as HTMLButtonElement,
};

// --- FABRIC.JS SETUP --- //
// @ts-ignore
const fabric = window.fabric;

function addInitialTextToCanvas(canvas) {
    if (!canvas) return;
    const { width, height } = canvas;
    const nameText = new fabric.Textbox(translations[state.lang].sampleText, {
        width: width > 40 ? width - 40 : width,
        fontSize: 60,
        fill: '#000000',
        fontFamily: 'Nunito',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
        left: width / 2,
        top: height / 2,
        selectable: true,
        hasControls: true,
        splitByGrapheme: true,
    });
    canvas.add(nameText);
    canvas.setActiveObject(nameText);
    state.activeText = nameText;
}

function initCanvas() {
  const container = DOMElements.canvasEl.parentElement;
  if (!container) return;

  const width = container.clientWidth;
  if(width === 0) {
    console.error("Canvas container has zero width. Aborting initialization.");
    return;
  }

  const aspectRatio = state.selectedProduct === 'id_tag' ? 9 / 16 : 16 / 9;
  const