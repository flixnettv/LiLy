
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- CONFIGURATION & CONSTANTS --- //
import { libraryImages } from './assets.js';

const translations = {
  en: {
    // startTitle: "What should we design today?", // Kept in HTML
    startTitle: "What should we design today?",
    startSubtitle: "Create amazing designs for your labels and products.",
    startBtn: "Design Your Label Now",
    // aiDesignerTitle: "Lily Label AI Designer", // HARDCODED IN HTML NOW
    toggleLang: 'العربية',
    createYourDesign: 'Create Your Design',
    productType: '1. Select Product Type',
    sticker: 'Book & Notebook Labels',
    notebook: 'Notebook',
    lunchbox: 'Lunch Box',
    wristpad: 'Wristpad',
    id_tag: 'ID for Neck & Bags',
    customizeText: 'Customize',
    studentName: "Name",
    grade: 'Grade',
    'grade-kg1': 'KG 1', 'grade-kg2': 'KG 2', 'grade-1': 'Grade 1', 'grade-2': 'Grade 2', 'grade-3': 'Grade 3', 'grade-4': 'Grade 4', 'grade-5': 'Grade 5', 'grade-6': 'Grade 6', 'grade-7': 'Grade 7', 'grade-8': 'Grade 8', 'grade-9': 'Grade 9', 'grade-10': 'Grade 10', 'grade-11': 'Grade 11', 'grade-12': 'Grade 12', 'grade-other': 'Other',
    year: 'Year',
    fontFamily: 'Font',
    fontSize: 'Size',
    fontColor: 'Color',
    addToCart: 'Add to Cart',
    back: 'Back',
    enterDetails: 'Enter Details',
    continueToBackground: 'Next',
    uploadYourImage: 'Upload Your Image',
    selectImage: 'Select Image',
    confirmAndContinue: 'Confirm',
    selectFont: 'Select Typography',
    cartTitle: 'Your Cart',
    emptyCart: 'Your cart is empty.',
    checkout: 'Checkout via WhatsApp',
    totalPrice: 'Total:',
    removeItem: 'Remove',
    errorPrefix: 'Oops!',
    errorText: 'Something went wrong.',
    nameRequired: 'Name is required.',
    sampleText: 'Sample Text',
    whatsappMessageHeader: 'Hello Lily Label, I would like to order the following items:',
    product: 'Product',
    name: 'Name',
    price: 'Price',
    total: 'Total',
    background: 'Background',
    imageLibrary: 'Background Library',
    selectBackground: 'Select Background',
    noImagesFound: 'No images available.',
    loadMore: 'Load More',
  },
  ar: {
    startTitle: "ماذا سنصمم اليوم؟",
    startSubtitle: "ابتكر تصميمات رائعة لملصقاتك ومنتجاتك.",
    startBtn: "صمم ملصقك الآن",
    // aiDesignerTitle: "Lily Label AI Designer", // HARDCODED IN HTML NOW
    toggleLang: 'English',
    createYourDesign: 'أنشئ تصميمك',
    productType: '١. اختر نوع المنتج',
    sticker: 'ملصقات كتب ودفاتر',
    notebook: 'دفتر',
    lunchbox: 'صندوق طعام',
    wristpad: 'مسند معصم',
    id_tag: 'بطاقة تعريفية للرقبة والحقائب',
    customizeText: 'تخصيص',
    studentName: 'الاسم',
    grade: 'الصف',
    'grade-kg1': 'تمهيدي أول', 'grade-kg2': 'تمهيدي ثاني', 'grade-1': 'الصف الأول', 'grade-2': 'الصف الثاني', 'grade-3': 'الصف الثالث', 'grade-4': 'الصف الرابع', 'grade-5': 'الصف الخامس', 'grade-6': 'الصف السادس', 'grade-7': 'الصف السابع', 'grade-8': 'الصف الثامن', 'grade-9': 'الصف التاسع', 'grade-10': 'الصف العاشر', 'grade-11': 'الصف الحادي عشر', 'grade-12': 'الصف الثاني عشر', 'grade-other': 'أخرى',
    year: 'العام الدراسي',
    fontFamily: 'الخط',
    fontSize: 'الحجم',
    fontColor: 'اللون',
    addToCart: 'أضف إلى السلة',
    back: 'رجوع',
    enterDetails: 'أدخل البيانات',
    continueToBackground: 'التالي',
    uploadYourImage: 'ارفع صورة',
    selectImage: 'اختر صورة',
    confirmAndContinue: 'تأكيد',
    selectFont: 'اختر الخط',
    cartTitle: 'سلة التسوق',
    emptyCart: 'سلة التسوق فارغة.',
    checkout: 'إتمام الطلب عبر واتساب',
    totalPrice: 'الإجمالي:',
    removeItem: 'إزالة',
    errorPrefix: 'عفوًا!',
    errorText: 'حدث خطأ ما.',
    nameRequired: 'الرجاء إدخال الاسم.',
    sampleText: 'نص تجريبي',
    whatsappMessageHeader: 'مرحباً ليلي ليبل، أود طلب المنتجات التالية:',
    product: 'المنتج',
    name: 'الاسم',
    price: 'السعر',
    total: 'الإجمالي',
    background: 'الخلفية',
    imageLibrary: 'مكتبة الخلفيات',
    selectBackground: 'اختر خلفية',
    noImagesFound: 'لا توجد صور.',
    loadMore: 'عرض المزيد',
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

const IMAGES_PER_PAGE = 8; // Increased slightly due to better layout

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
  imageLibraryPage: 1,
};

// --- DOM ELEMENTS --- //
const DOMElements = {
  startScreen: document.getElementById('start-screen'),
  mainEditor: document.getElementById('main-editor'),
  infoModal: document.getElementById('info-modal'),
  fontModal: document.getElementById('font-modal'),
  cartModal: document.getElementById('cart-modal'),
  imageLibraryModal: document.getElementById('image-library-modal'),
  canvasEl: document.getElementById('design-canvas'),
  langSwitcher: document.getElementById('lang-switcher'),
  studentNameInput: document.getElementById('student-name'),
  fontSizeSlider: document.getElementById('font-size'),
  fontSizeValue: document.getElementById('font-size-value'),
  fontColorInput: document.getElementById('font-color'),
  fontFamilyBtn: document.getElementById('font-family-btn'),
  addToCartBtn: document.getElementById('add-to-cart-btn'),
  infoNameInput: document.getElementById('info-name'),
  infoGradeSelect: document.getElementById('info-grade'),
  infoYearSelect: document.getElementById('info-year'),
  submitInfoBtn: document.getElementById('submit-info-btn'),
  cartBtn: document.getElementById('cart-btn'),
  cartCount: document.getElementById('cart-count'),
  cartItemsContainer: document.getElementById('cart-items'),
  cartFooter: document.getElementById('cart-footer'),
  cartTotalPrice: document.getElementById('cart-total-price'),
  emptyCartMsg: document.getElementById('empty-cart-msg'),
  checkoutBtn: document.getElementById('checkout-btn'),
  fontList: document.getElementById('font-list'),
  backBtn: document.getElementById('back-btn'),
  backBtnMobile: document.getElementById('back-btn-mobile'),
  imageLibraryGrid: document.getElementById('image-library-grid'),
  loadMoreContainer: document.getElementById('load-more-container'),
  infoBackBtn: document.getElementById('info-back-btn'),
  libraryBackBtn: document.getElementById('library-back-btn'),
  closeLibraryModalBtn: document.getElementById('close-library-modal-btn'),
};

// --- FABRIC.JS SETUP --- //
const fabric = window.fabric;

function addInitialTextToCanvas(canvas) {
    if (!canvas) return;
    const { width, height } = canvas;
    const textToShow = state.studentInfo.name || translations[state.lang].sampleText;
    const nameText = new fabric.Textbox(textToShow, {
        width: width > 40 ? width - 40 : width,
        fontSize: width / 10, // Dynamic font size based on width
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

    // Add listener for two-way data binding
    nameText.on('text:changed', () => {
        const newText = nameText.text;
        // Update the input field if it's different
        if (DOMElements.studentNameInput.value !== newText) {
            DOMElements.studentNameInput.value = newText;
        }
        // Also update the name in the central state
        state.studentInfo.name = newText;
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
    DOMElements.fontFamilyBtn.innerHTML = `<span class="truncate">${state.activeText.fontFamily}</span> <i class="fas fa-chevron-down text-xs"></i>`;
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
    // Also update the name in the central state so it's correct when adding to cart
    state.studentInfo.name = DOMElements.studentNameInput.value;
}

function initCanvas() {
  const wrapper = document.getElementById('canvas-wrapper');
  const container = wrapper.parentElement;
  
  if (!container || !wrapper) return;

  // Calculate maximum available dimensions based on container
  const padding = 32; // Standard padding
  const maxWidth = container.clientWidth - padding;
  const maxHeight = container.clientHeight - padding;
  
  // Determine aspect ratio
  const aspectRatio = state.selectedProduct === 'id_tag' ? 3 / 4 : 16 / 9;
  
  // Calculate best fit dimensions
  let targetWidth = maxWidth;
  let targetHeight = maxWidth / aspectRatio;

  if (targetHeight > maxHeight) {
      targetHeight = maxHeight;
      targetWidth = maxHeight * aspectRatio;
  }

  // Set wrapper size
  wrapper.style.width = `${targetWidth}px`;
  wrapper.style.height = `${targetHeight}px`;

  if (state.fabricCanvas) {
      state.fabricCanvas.dispose();
  }

  DOMElements.canvasEl.width = targetWidth;
  DOMElements.canvasEl.height = targetHeight;

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
        // Small delay to allow DOM to calculate layout
        setTimeout(initCanvas, 50);
    } else { // 'start' screen
        DOMElements.startScreen.style.display = 'flex';
        DOMElements.mainEditor.classList.add('hidden');
        DOMElements.mainEditor.classList.remove('flex');
        if (state.fabricCanvas) {
          state.fabricCanvas.dispose();
          state.fabricCanvas = null;
        }
        state.isCanvasInitialized = false;
        state.selectedProduct = null;
        state.studentInfo = { name: '', grade: '', year: '' };
    }
}

function showModal(modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex', 'animate-fade-in');
    if(modal.firstElementChild) {
        modal.firstElementChild.classList.add('animate-scale-in');
    }
}

function hideModal(modal) {
    if(modal.firstElementChild) {
        modal.firstElementChild.classList.remove('animate-scale-in');
        modal.firstElementChild.classList.add('animate-scale-out');
    }
    modal.classList.remove('animate-fade-in');
    modal.classList.add('animate-fade-out');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex', 'animate-fade-out');
        if(modal.firstElementChild) {
            modal.firstElementChild.classList.remove('animate-scale-out');
        }
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
            el.placeholder = translations[state.lang][key];
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

function handleImageSelection(imageUrl) {
    hideModal(DOMElements.imageLibraryModal);
    showScreen('editor');

    const setupBg = () => {
        if (!state.fabricCanvas) {
            setTimeout(setupBg, 50); // wait for canvas init
            return;
        }
        fabric.util.loadImage(imageUrl, (imgEl) => {
            if (imgEl) {
                const img = new fabric.Image(imgEl);
                state.fabricCanvas.setBackgroundImage(img, state.fabricCanvas.renderAll.bind(state.fabricCanvas), {
                    scaleX: state.fabricCanvas.width / img.width,
                    scaleY: state.fabricCanvas.height / img.height,
                });
                updateAddToCartButtonState();
            }
        });
    };
    setupBg();
}

function populateFontModal() {
    DOMElements.fontList.innerHTML = fonts.map(font => `
        <button class="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-colors text-lg border border-white/5 mb-2" style="font-family: ${font.style};" data-font-family="${font.style}" data-font-name="${font.name}">
            ${font.name}
        </button>
    `).join('');
    DOMElements.fontList.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const fontFamily = button.dataset.fontFamily;
            if (state.activeText && fontFamily) {
                state.activeText.set('fontFamily', fontFamily);
                DOMElements.fontFamilyBtn.innerHTML = `<span class="truncate">${button.dataset.fontName}</span> <i class="fas fa-chevron-down text-xs"></i>`;
                state.fabricCanvas.requestRenderAll();
            }
            hideModal(DOMElements.fontModal);
        });
    });
}

function loadMoreImages() {
    const category = state.selectedProduct;
    const images = libraryImages[category] || [];

    const startIndex = (state.imageLibraryPage - 1) * IMAGES_PER_PAGE;
    const endIndex = startIndex + IMAGES_PER_PAGE;
    const pageImages = images.slice(startIndex, endIndex);

    if (state.imageLibraryPage === 1 && images.length === 0) {
        DOMElements.imageLibraryGrid.innerHTML = `<p class="col-span-full text-center py-8 text-gray-400">${translations[state.lang].noImagesFound}</p>`;
        return;
    }

    // Append new skeletons
    const skeletonsHtml = pageImages.map((_, i) => `<div id="skeleton-${startIndex + i}" class="skeleton aspect-square rounded-xl"></div>`).join('');
    DOMElements.imageLibraryGrid.insertAdjacentHTML('beforeend', skeletonsHtml);
    
    // Load images and replace skeletons
    pageImages.forEach((img, i) => {
        const index = startIndex + i;
        const imageEl = new Image();
        imageEl.src = img.url;
        imageEl.alt = img.name;
        imageEl.className = "w-full h-full object-cover transition-transform duration-500 hover:scale-110";
        imageEl.loading = "lazy";

        imageEl.onload = () => {
            const skeleton = document.getElementById(`skeleton-${index}`);
            if (skeleton) {
                const container = document.createElement('div');
                container.className = "aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg border-2 border-transparent hover:border-blue-400 relative group";
                
                // Overlay for better UX
                const overlay = document.createElement('div');
                overlay.className = "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center";
                overlay.innerHTML = '<i class="fas fa-check-circle text-white text-3xl"></i>';
                
                container.appendChild(imageEl);
                container.appendChild(overlay);
                
                container.addEventListener('click', () => handleImageSelection(img.url));
                skeleton.replaceWith(container);
            }
        };

        imageEl.onerror = () => {
            const skeleton = document.getElementById(`skeleton-${index}`);
            if (skeleton) {
                skeleton.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-red-400 text-xs p-2 text-center bg-white/5 rounded-xl"><i class="fas fa-exclamation-triangle mb-1"></i> Error</div>`;
                skeleton.classList.remove('skeleton');
            }
        };
    });

    // Handle "Load More" button
    DOMElements.loadMoreContainer.innerHTML = ''; // Clear existing button
    if (endIndex < images.length) {
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.id = 'load-more-btn';
        loadMoreBtn.className = 'px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm font-bold';
        loadMoreBtn.innerHTML = `${translations[state.lang].loadMore} <i class="fas fa-chevron-down ml-2"></i>`;
        loadMoreBtn.onclick = () => {
            state.imageLibraryPage++;
            loadMoreImages();
        };
        DOMElements.loadMoreContainer.appendChild(loadMoreBtn);
    }
}


function openImageLibrary() {
    state.imageLibraryPage = 1;
    DOMElements.imageLibraryGrid.innerHTML = '';
    DOMElements.loadMoreContainer.innerHTML = '';
    loadMoreImages();
    showModal(DOMElements.imageLibraryModal);
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
        DOMElements.emptyCartMsg.style.display = 'flex';
        DOMElements.cartFooter.classList.add('hidden');
    } else {
        DOMElements.emptyCartMsg.style.display = 'none';
        DOMElements.cartItemsContainer.innerHTML = state.cart.map((item, index) => `
            <div class="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                <img src="${item.preview}" alt="Product Preview" class="w-20 h-20 rounded-lg object-cover bg-black/20"/>
                <div class="flex-1 min-w-0">
                    <p class="font-bold text-base truncate">${translations[state.lang][item.product] || item.product}</p>
                    <p class="text-sm text-gray-400 truncate">${item.name}</p>
                    <p class="text-green-400 font-bold mt-1">${productPrices[item.product]} AED</p>
                </div>
                <button class="remove-item-btn text-red-400 hover:text-red-300 w-8 h-8 flex items-center justify-center rounded-full bg-red-500/10 hover:bg-red-500/20 transition-colors" data-index="${index}">
                  <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `).join('');
        const totalPrice = state.cart.reduce((total, item) => total + productPrices[item.product], 0);
        DOMElements.cartTotalPrice.textContent = `${totalPrice} AED`;
        DOMElements.cartFooter.classList.remove('hidden');
        document.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => removeFromCart(parseInt(e.currentTarget.dataset.index, 10)));
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
    state.cart.forEach((item, i) => {
        const price = productPrices[item.product];
        totalPrice += price;
        message += `*${i + 1}. ${translations[state.lang].product}:* ${translations[state.lang][item.product] || item.product}\n`;
        message += `  *${translations[state.lang].name}:* ${item.name}\n`;
        message += `  *${translations[state.lang].price}:* ${price} AED\n\n`;
    });
    message += `*${translations[state.lang].total}:* ${totalPrice} AED\n\n`;

    // Note: Replace with actual phone number
    const whatsappUrl = `https://wa.me/971501234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function showError(message) {
    const toast = document.createElement('div');
    toast.className = 'error-toast';
    toast.innerHTML = `<span class="font-bold pr-2">${translations[state.lang].errorPrefix}</span> ${message}`;
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


function handleInfoSubmit() {
    const name = DOMElements.infoNameInput.value.trim();
    if (!state.selectedProduct) {
        showError("Please select a product type.");
        return;
    }
    if (!name) {
        showError(translations[state.lang].nameRequired);
        return;
    }
    state.studentInfo = {
        name: name,
        grade: DOMElements.infoGradeSelect.value,
        year: DOMElements.infoYearSelect.value,
    };
    DOMElements.studentNameInput.value = name;
    hideModal(DOMElements.infoModal);
    openImageLibrary();
}

function setupEventListeners() {
    DOMElements.langSwitcher.addEventListener('click', () => {
        state.lang = state.lang === 'en' ? 'ar' : 'en';
        updateTranslations();
        populateYearAndGradeDropdowns();
        if(state.activeText && state.activeText.text === translations[state.lang === 'en' ? 'ar' : 'en'].sampleText){
            state.activeText.set('text', translations[state.lang].sampleText);
            state.fabricCanvas.requestRenderAll();
        }
    });

    document.getElementById('start-design-btn').addEventListener('click', () => {
        state.selectedProduct = null;
        document.querySelectorAll('.category-btn.active').forEach(b => b.classList.remove('active'));
        DOMElements.infoNameInput.value = '';
        DOMElements.submitInfoBtn.disabled = true;
        showModal(DOMElements.infoModal)
    });

    document.getElementById('close-info-modal-btn').addEventListener('click', () => hideModal(DOMElements.infoModal));
    DOMElements.infoBackBtn.addEventListener('click', () => hideModal(DOMElements.infoModal));

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn.active').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.selectedProduct = btn.getAttribute('data-category');
            DOMElements.submitInfoBtn.disabled = false;
        });
    });

    DOMElements.submitInfoBtn.addEventListener('click', handleInfoSubmit);
    DOMElements.closeLibraryModalBtn.addEventListener('click', () => hideModal(DOMElements.imageLibraryModal));
    DOMElements.libraryBackBtn.addEventListener('click', () => {
      hideModal(DOMElements.imageLibraryModal);
      showModal(DOMElements.infoModal);
    });

    // Editor controls
    DOMElements.backBtn.addEventListener('click', () => showScreen('start'));
    if (DOMElements.backBtnMobile) DOMElements.backBtnMobile.addEventListener('click', () => showScreen('start'));
    
    DOMElements.studentNameInput.addEventListener('input', updateTextFromInput);
    
    DOMElements.fontSizeSlider.addEventListener('input', (e) => {
        const size = e.target.value;
        if (state.activeText) {
            state.activeText.set('fontSize', parseInt(size, 10));
            state.fabricCanvas.requestRenderAll();
        }
        DOMElements.fontSizeValue.textContent = `${size}px`;
    });
    
    DOMElements.fontColorInput.addEventListener('input', (e) => {
        if (state.activeText) {
            state.activeText.set('fill', e.target.value);
            state.fabricCanvas.requestRenderAll();
        }
    });
    
    DOMElements.fontFamilyBtn.addEventListener('click', () => showModal(DOMElements.fontModal));
    DOMElements.addToCartBtn.addEventListener('click', addToCart);

    // Cart
    DOMElements.cartBtn.addEventListener('click', () => showModal(DOMElements.cartModal));
    document.getElementById('close-cart-btn').addEventListener('click', () => hideModal(DOMElements.cartModal));
    DOMElements.checkoutBtn.addEventListener('click', handleCheckout);

    // Close modals on outside click
    [DOMElements.infoModal, DOMElements.fontModal, DOMElements.cartModal, DOMElements.imageLibraryModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal(modal);
            }
        });
    });
    
    window.addEventListener('resize', () => {
      if(state.currentScreen === 'editor' && state.isCanvasInitialized) {
        initCanvas();
      }
    });
}

// --- INITIALIZATION --- //

function init() {
    updateTranslations();
    populateYearAndGradeDropdowns();
    populateFontModal();
    setupEventListeners();
    updateCartView();
}

init();
