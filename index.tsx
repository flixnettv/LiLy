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
const state: {
  lang: 'en' | 'ar';
  currentScreen: string;
  selectedProduct: string | null;
  studentInfo: { name: string; grade: string; year: string; };
  cart: any[];
  fabricCanvas: any | null;
  activeText: any | null;
  isCanvasInitialized: boolean;
} = {
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

function updateControlsFromActiveText() {
    if (!state.activeText) return;
    DOMElements.fontSizeSlider.value = state.activeText.fontSize;
    DOMElements.fontSizeValue.textContent = `${Math.round(state.activeText.fontSize)}px`;
    DOMElements.fontColorInput.value = state.activeText.fill;
    DOMElements.fontFamilyBtn.textContent = state.activeText.fontFamily;
    DOMElements.studentNameInput.value = state.activeText.text === translations[state.lang].sampleText ? state.studentInfo.name : state.activeText.text;
}

function updateAddToCartButtonState() {
    const hasBg = state.fabricCanvas && (state.fabricCanvas.backgroundImage || state.fabricCanvas.backgroundColor !== '#ffffff');
    DOMElements.addToCartBtn.disabled = !hasBg;
}

function updateTextFromInput() {
    const newText = DOMElements.studentNameInput.value || (state.studentInfo.name || translations[state.lang].sampleText);
    if (state.activeText) {
        state.activeText.set('text', newText);
        state.fabricCanvas.requestRenderAll();
    }
}

function initCanvas() {
  const container = DOMElements.canvasEl.parentElement;
  if (!container) return;

  const width = container.clientWidth;
  if(width === 0) {
    setTimeout(initCanvas, 100);
    return;
  }

  const aspectRatio = state.selectedProduct === 'id_tag' ? 3 / 4 : 16 / 9;
  const height = width / aspectRatio;

  if (state.fabricCanvas) {
      state.fabricCanvas.dispose();
  }

  DOMElements.canvasEl.width = width;
  DOMElements.canvasEl.height = height;
  container.style.height = `${height}px`;

  state.fabricCanvas = new fabric.Canvas(DOMElements.canvasEl, {
      preserveObjectStacking: true,
      backgroundColor: '#ffffff',
  });

  addInitialTextToCanvas(state.fabricCanvas);

  state.fabricCanvas.on('selection:created', (e) => {
    if (e.selected[0].type === 'textbox') {
        state.activeText = e.selected[0];
        updateControlsFromActiveText();
    }
  });

  state.fabricCanvas.on('selection:updated', (e) => {
      if (e.selected[0].type === 'textbox') {
          state.activeText = e.selected[0];
          updateControlsFromActiveText();
      }
  });

  state.fabricCanvas.on('selection:cleared', () => {
      state.activeText = null;
  });
  
  state.isCanvasInitialized = true;
  updateAddToCartButtonState();
  updateTextFromInput();
}

// --- UI & SCREEN MANAGEMENT --- //

function showScreen(screenName) {
    state.currentScreen = screenName;
    if (screenName === 'editor') {
        DOMElements.startScreen.style.display = 'none';
        DOMElements.mainEditor.classList.remove('hidden');
        DOMElements.mainEditor.classList.add('flex');
        if (!state.isCanvasInitialized) {
            setTimeout(initCanvas, 0);
        }
    } else {
        DOMElements.startScreen.style.display = 'flex';
        DOMElements.mainEditor.classList.add('hidden');
        DOMElements.mainEditor.classList.remove('flex');
        if (state.fabricCanvas) {
          state.fabricCanvas.dispose();
          state.fabricCanvas = null;
          state.isCanvasInitialized = false;
        }
    }
}

function showModal(modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex', 'animate-fade-in');
    modal.firstElementChild.classList.add('animate-scale-in');
}

function hideModal(modal) {
    modal.firstElementChild.classList.remove('animate-scale-in');
    modal.firstElementChild.classList.add('animate-scale-out');
    modal.classList.remove('animate-fade-in');
    modal.classList.add('animate-fade-out');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex', 'animate-fade-out');
        modal.firstElementChild.classList.remove('animate-scale-out');
    }, 300);
}

function updateTranslations() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[state.lang][key]) {
            el.innerHTML = translations[state.lang][key];
        }
    });
    document.querySelectorAll('[data-lang-placeholder-key]').forEach(el => {
        const key = el.getAttribute('data-lang-placeholder-key');
        if (translations[state.lang][key]) {
            (el as HTMLInputElement).placeholder = translations[state.lang][key];
        }
    });
    DOMElements.langSwitcher.textContent = translations[state.lang].toggleLang;
}

// --- CORE LOGIC & EVENT HANDLERS --- //
function populateYearAndGradeDropdowns() {
    const grades = ['kg1', 'kg2', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'other'];
    DOMElements.infoGradeSelect.innerHTML = grades.map(g => `<option value="${g}">${translations[state.lang]['grade-'+g] || g}</option>`).join('');
    const currentYear = new Date().getFullYear();
    DOMElements.infoYearSelect.innerHTML = Array.from({length: 3}, (_, i) => {
        const year = currentYear + i - 1;
        return `<option value="${year}-${year + 1}">${year} - ${year + 1}</option>`;
    }).join('');
}

async function generateDesignSuggestions() {
    const { name, grade, year } = state.studentInfo;
    DOMElements.galleryUserInfo.textContent = `${name} - ${translations[state.lang]['grade-'+grade] || grade} - ${year}`;
    hideModal(DOMElements.infoModal);
    showModal(DOMElements.imageGalleryModal);
    DOMElements.galleryLoader.classList.remove('hidden');
    DOMElements.galleryLoader.classList.add('flex');
    DOMElements.imageGalleryGrid.innerHTML = '';
    
    try {
        const prompt = `Create a visually appealing, kid-friendly sticker background design for a student named "${name}". The design should be vibrant, cheerful, and suitable for school items. Consider themes like cute animals, space exploration, cartoon monsters, superheroes, or fantasy worlds. Avoid text. The design must be a single, cohesive background image.`;
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 4,
                outputMimeType: 'image/jpeg',
                aspectRatio: state.selectedProduct === 'id_tag' ? '4:3' : '16:9',
            },
        });
        const images = response.generatedImages.map(img => `data:image/jpeg;base64,${img.image.imageBytes}`);
        displayImageSuggestions(images);
    } catch (error) {
        console.error("AI generation failed:", error);
        showError(translations[state.lang].errorText);
        hideModal(DOMElements.imageGalleryModal);
    } finally {
        DOMElements.galleryLoader.classList.add('hidden');
        DOMElements.galleryLoader.classList.remove('flex');
    }
}

function displayImageSuggestions(images) {
    DOMElements.imageGalleryGrid.innerHTML = images.map(src => `
        <div class="aspect-video rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform shadow-lg border-2 border-transparent hover:border-[#58a6ff]">
            <img src="${src}" class="w-full h-full object-cover" loading="lazy" />
        </div>
    `).join('');
    DOMElements.imageGalleryGrid.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            handleImageSelection(img.src);
        });
    });
}

function handleImageSelection(imageUrl) {
    if (!state.fabricCanvas) {
        showScreen('editor');
        setTimeout(() => handleImageSelection(imageUrl), 150); // wait for canvas init
        return;
    };
    fabric.Image.fromURL(imageUrl, (img) => {
        state.fabricCanvas.setBackgroundImage(img, state.fabricCanvas.renderAll.bind(state.fabricCanvas), {
            scaleX: state.fabricCanvas.width / img.width,
            scaleY: state.fabricCanvas.height / img.height,
        });
        updateAddToCartButtonState();
        hideModal(DOMElements.imageGalleryModal);
        hideModal(DOMElements.uploadModal);
        showScreen('editor');
    }, { crossOrigin: 'anonymous' });
}

function populateFontModal() {
    DOMElements.fontList.innerHTML = fonts.map(font => `
        <button class="w-full text-left p-3 rounded-lg hover:bg-[#292e36] transition-colors text-xl" style="font-family: ${font.style};" data-font-family="${font.style}" data-font-name="${font.name}">
            ${font.name}
        </button>
    `).join('');
    DOMElements.fontList.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const fontFamily = button.dataset.fontFamily;
            if (state.activeText && fontFamily) {
                state.activeText.set('fontFamily', fontFamily);
                DOMElements.fontFamilyBtn.textContent = button.dataset.fontName;
                state.fabricCanvas.requestRenderAll();
            }
            hideModal(DOMElements.fontModal);
        });
    });
}

// --- CART --- //

function updateCartCount() {
    DOMElements.cartCount.textContent = state.cart.length.toString();
    DOMElements.cartCount.classList.toggle('hidden', state.cart.length === 0);
}

function updateCartView() {
    updateCartCount();
    if (state.cart.length === 0) {
        DOMElements.cartItemsContainer.innerHTML = '';
        DOMElements.emptyCartMsg.style.display = 'block';
        DOMElements.cartFooter.classList.add('hidden');
    } else {
        DOMElements.emptyCartMsg.style.display = 'none';
        DOMElements.cartItemsContainer.innerHTML = state.cart.map((item, index) => `
            <div class="flex items-center gap-4 p-4">
                <img src="${item.preview}" alt="Product Preview" class="w-24 h-auto rounded-md object-cover bg-gray-700"/>
                <div class="flex-1">
                    <p class="font-bold text-lg">${translations[state.lang][item.product] || item.product}</p>
                    <p class="text-sm text-gray-400">${item.name}</p>
                </div>
                <div class="text-right">
                    <p class="font-bold text-lg">${productPrices[item.product]} AED</p>
                    <button class="remove-item-btn text-red-500 hover:text-red-400 text-sm" data-index="${index}">
                      <i class="fas fa-trash-alt"></i> ${translations[state.lang].removeItem}
                    </button>
                </div>
            </div>
        `).join('');
        const totalPrice = state.cart.reduce((total, item) => total + productPrices[item.product], 0);
        DOMElements.cartTotalPrice.textContent = `${totalPrice} AED`;
        DOMElements.cartFooter.classList.remove('hidden');
        document.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => removeFromCart(parseInt((e.currentTarget as HTMLElement).dataset.index, 10)));
        });
    }
}

function addToCart() {
    if (!state.fabricCanvas || !state.selectedProduct) return;
    state.cart.push({
        product: state.selectedProduct,
        name: state.studentInfo.name,
        grade: state.studentInfo.grade,
        year: state.studentInfo.year,
        preview: state.fabricCanvas.toDataURL({ format: 'png', quality: 0.8 }),
        design: state.fabricCanvas.toJSON()
    });
    updateCartView();
    showModal(DOMElements.cartModal);
    showScreen('start');
}

function removeFromCart(index) {
    state.cart.splice(index, 1);
    updateCartView();
}

function handleCheckout() {
    if (state.cart.length === 0) return;
    let message = `${translations[state.lang].whatsappMessageHeader}\n\n`;
    let totalPrice = 0;
    state.cart.forEach((item, index) => {
        const price = productPrices[item.product];
        totalPrice += price;
        message += `*${index + 1}. ${translations[state.lang].product}:* ${translations[state.lang][item.product]}\n*${translations[state.lang].name}:* ${item.name}\n*${translations[state.lang].grade}:* ${translations[state.lang]['grade-' + item.grade] || item.grade}\n*${translations[state.lang].price}:* ${price} AED\n\n`;
    });
    message += `*${translations[state.lang].total}: ${totalPrice} AED*`;
    const phoneNumber = '971501234567'; // Replace with actual business phone number
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function showError(message) {
    const toast = document.createElement('div');
    toast.className = 'error-toast';
    toast.innerHTML = `<span class="font-bold">${translations[state.lang].errorPrefix}</span> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translate(-50%, 0)';
    }, 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, 20px)';
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// --- INITIALIZATION --- //

function setupEventListeners() {
    DOMElements.langSwitcher.addEventListener('click', () => {
        state.lang = state.lang === 'en' ? 'ar' : 'en';
        updateTranslations();
        populateYearAndGradeDropdowns();
    });

    document.getElementById('start-design-btn').addEventListener('click', () => showModal(DOMElements.infoModal));
    DOMElements.backBtn.addEventListener('click', () => showScreen('start'));

    // --- Modals --- //
    DOMElements.infoModal.querySelector('#close-info-modal-btn').addEventListener('click', () => hideModal(DOMElements.infoModal));
    DOMElements.imageGalleryModal.querySelector('#back-from-gallery-btn').addEventListener('click', () => { hideModal(DOMElements.imageGalleryModal); showModal(DOMElements.infoModal); });
    DOMElements.imageGalleryModal.querySelector('#upload-your-own-btn').addEventListener('click', () => { hideModal(DOMElements.imageGalleryModal); showModal(DOMElements.uploadModal); });
    DOMElements.uploadModal.querySelector('#back-from-upload-btn').addEventListener('click', () => { hideModal(DOMElements.uploadModal); showModal(DOMElements.imageGalleryModal); });
    DOMElements.cartModal.querySelector('#close-cart-btn').addEventListener('click', () => hideModal(DOMElements.cartModal));
    DOMElements.fontModal.addEventListener('click', (e) => { if (e.target === DOMElements.fontModal) hideModal(DOMElements.fontModal); });

    // --- Info Form --- //
    DOMElements.infoModal.querySelectorAll('.category-btn').forEach(btn => btn.addEventListener('click', (e) => {
        DOMElements.infoModal.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        (e.currentTarget as HTMLElement).classList.add('active');
        state.selectedProduct = (e.currentTarget as HTMLElement).dataset.category;
        validateInfoForm();
    }));
    const infoInputs = [DOMElements.infoNameInput, DOMElements.infoGradeSelect, DOMElements.infoYearSelect];
    const validateInfoForm = () => { DOMElements.submitInfoBtn.disabled = !(DOMElements.infoNameInput.value.trim() && state.selectedProduct) };
    infoInputs.forEach(input => input.addEventListener('input', validateInfoForm));
    DOMElements.submitInfoBtn.addEventListener('click', () => {
        state.studentInfo = { name: DOMElements.infoNameInput.value.trim(), grade: DOMElements.infoGradeSelect.value, year: DOMElements.infoYearSelect.value };
        DOMElements.studentNameInput.value = state.studentInfo.name;
        generateDesignSuggestions();
    });

    // --- Upload --- //
    DOMElements.uploadImageBtn.addEventListener('click', () => DOMElements.uploadInput.click());
    DOMElements.uploadInput.addEventListener('change', (event: Event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                DOMElements.imagePreview.src = e.target.result as string;
                DOMElements.imagePreviewContainer.classList.remove('hidden', 'flex');
                DOMElements.imagePreviewContainer.classList.add('flex');
                DOMElements.confirmUploadBtn.classList.remove('hidden');
                DOMElements.uploadImageBtn.classList.add('hidden');
            };
            reader.readAsDataURL(file);
        }
    });
    DOMElements.confirmUploadBtn.addEventListener('click', () => handleImageSelection(DOMElements.imagePreview.src));

    // --- Editor Controls --- //
    DOMElements.studentNameInput.addEventListener('input', updateTextFromInput);
    DOMElements.fontFamilyBtn.addEventListener('click', () => showModal(DOMElements.fontModal));
    DOMElements.fontSizeSlider.addEventListener('input', (e) => {
        const size = (e.target as HTMLInputElement).value;
        DOMElements.fontSizeValue.textContent = `${size}px`;
        if (state.activeText) {
            state.activeText.set('fontSize', parseInt(size, 10));
            state.fabricCanvas.requestRenderAll();
        }
    });
    DOMElements.fontColorInput.addEventListener('input', (e) => {
        const color = (e.target as HTMLInputElement).value;
        if (state.activeText) {
            state.activeText.set('fill', color);
            state.fabricCanvas.requestRenderAll();
        }
    });

    // --- Cart --- //
    DOMElements.addToCartBtn.addEventListener('click', addToCart);
    DOMElements.cartBtn.addEventListener('click', () => showModal(DOMElements.cartModal));
    DOMElements.checkoutBtn.addEventListener('click', handleCheckout);
}

function init() {
    updateTranslations();
    populateYearAndGradeDropdowns();
    populateFontModal();
    updateCartView();
    setupEventListeners();
    (DOMElements.submitInfoBtn as HTMLButtonElement).disabled = true;
}

// Start the app
init();