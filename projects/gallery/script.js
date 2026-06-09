// ============================================
// LIONEL MESSI GALLERY
// EASY TO EDIT - JUST REPLACE THE URLS BELOW
// ============================================

// HOW TO ADD YOUR IMAGES:
// 1. Upload your images to a hosting service (Imgur, Google Drive, Pinterest, etc.)
// 2. Copy the image direct URL
// 3. Paste it in the "url" field below

const imageCollection = [
    // ==================== BARCELONA ERA ====================
    { 
        id: 1, 
        title: "Messi - Barcelona Legend", 
        category: "barcelona", 
        desc: "The GOAT in his prime at Camp Nou",
        url: "https://i.pinimg.com/1200x/16/51/71/165171ba2d884dcc2875606882eb0adf.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 2, 
        title: "Messi - The Magician", 
        category: "barcelona", 
        desc: "Dribbling past defenders with grace",
        url: "https://i.pinimg.com/1200x/ef/cd/5f/efcd5fbfaa8e8bae431dd2ce826d3b54.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 3, 
        title: "Messi - Number 10 Legacy", 
        category: "barcelona", 
        desc: "The legendary number 10 jersey",
        url: "https://i.pinimg.com/1200x/ff/38/cd/ff38cdefd90650301425d9bd29369815.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 4, 
        title: "Messi - Celebration", 
        category: "barcelona", 
        desc: "Iconic goal celebration",
        url: "https://i.pinimg.com/736x/41/19/92/411992e5770a9e2ad26cbe8f2db423dc.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 5, 
        title: "Messi - Captain's Armband", 
        category: "barcelona", 
        desc: "Leading as team captain",
        url: "https://i.pinimg.com/736x/95/4f/22/954f2231fcd4120a47bc43151b125d2b.jpg"  // <- PASTE YOUR URL HERE
    },
    
    // ==================== ARGENTINA NATIONAL TEAM ====================
    { 
        id: 6, 
        title: "Messi - World Cup Champion", 
        category: "argentina", 
        desc: "Lifting the FIFA World Cup trophy",
        url: "https://i.pinimg.com/736x/6c/fe/ef/6cfeef1f897a2ddcd186f01fab4ab879.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 7, 
        title: "Messi - Copa America Glory", 
        category: "argentina", 
        desc: "Celebrating Copa America victory",
        url: "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2024/07/15/d4013913-1940-4a32-80c9-5d790ce30022_8ce6bdb5.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 8, 
        title: "Messi - La Albiceleste", 
        category: "argentina", 
        desc: "Wearing Argentina's colors",
        url: "https://i.pinimg.com/1200x/43/70/1e/43701e565093c48d109ce2ef15bdaeb7.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 9, 
        title: "Messi - National Pride", 
        category: "argentina", 
        desc: "Singing the national anthem",
        url: "https://i.pinimg.com/1200x/1e/bc/4b/1ebc4bd911d3a635c6ab935aa2aeac7b.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 10, 
        title: "Messi - Golden Ball Winner", 
        category: "argentina", 
        desc: "Receiving the Golden Ball award",
        url: "https://i.pinimg.com/1200x/84/32/9d/84329d3e1bdec7d947cce0f549bf887f.jpg"  // <- PASTE YOUR URL HERE
    },
    
    // ==================== TROPHIES & ACHIEVEMENTS ====================
    { 
        id: 11, 
        title: "Messi - Ballon d'Or", 
        category: "trophies", 
        desc: "Record-breaking 8th Ballon d'Or",
        url: "https://i.pinimg.com/1200x/04/89/89/048989af8aa72c1caf0978886912b561.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 12, 
        title: "Messi - Champions League", 
        category: "trophies", 
        desc: "Holding the Champions League trophy",
        url: "https://i.pinimg.com/1200x/87/f8/e3/87f8e3d618a97640bfc681be05f196ab.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 13, 
        title: "Messi - La Liga Champion", 
        category: "trophies", 
        desc: "La Liga championship victory",
        url: "https://static0.givemesportimages.com/wordpress/wp-content/uploads/2022/04/GettyImages-1145510384.jpg?w=1200&h=675&fit=crop"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 14, 
        title: "Messi - Golden Boot", 
        category: "trophies", 
        desc: "European Golden Boot award",
        url: "https://i.pinimg.com/1200x/5d/94/05/5d94057bba6dce1a7c8ea56b143a39e2.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 15, 
        title: "Messi - Trophy Collection", 
        category: "trophies", 
        desc: "Incredible silverware collection",
        url: "https://i.pinimg.com/736x/e6/51/e0/e651e03aa0a063fadc4e056570b674ec.jpg"  // <- PASTE YOUR URL HERE
    },
    
    // ==================== ICONIC MOMENTS ====================
    { 
        id: 16, 
        title: "Messi - Goal of the Century", 
        category: "iconic", 
        desc: "Legendary goal against Getafe",
        url: "https://i.pinimg.com/1200x/70/82/cb/7082cb5f44925dc51192739f1251348f.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 17, 
        title: "Messi - Jersey Gesture", 
        category: "iconic", 
        desc: "Iconic shirt celebration",
        url: "https://i.pinimg.com/736x/b2/0a/b8/b20ab854ea70c5ef8bf8c110bfff6614.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 18, 
        title: "Messi - Free Kick Master", 
        category: "iconic", 
        desc: "Perfecting free kicks",
        url: "https://i.pinimg.com/1200x/4e/c2/83/4ec283b3b635ccbe4614f6aa79bfe9d6.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 19, 
        title: "Messi - UNICEF Ambassador", 
        category: "iconic", 
        desc: "Supporting children's rights",
        url: "https://i.pinimg.com/1200x/05/f5/86/05f5866a59782a54cf1ec33d186f69ad.jpg"  // <- PASTE YOUR URL HERE
    },
    { 
        id: 20, 
        title: "Messi - The Legacy Continues", 
        category: "iconic", 
        desc: "Still creating magic worldwide",
        url: "https://i.pinimg.com/736x/c5/1a/db/c51adb02222874f9d0528288be216107.jpg"  // <- PASTE YOUR URL HERE
    }
];

// ============================================
// HOW TO GET IMAGE URLs FROM PINTEREST:
// ============================================
// 1. Go to Pinterest and search "Lionel Messi"
// 2. Click on an image you like
// 3. Right-click on the image
// 4. Select "Copy image address" or "Copy image link"
// 5. Paste that URL in the "url" field above
// ============================================

// ============================================
// APPLICATION STATE (DON'T CHANGE BELOW)
// ============================================
let activeFilter = 'all';
let searchQuery = '';
let currentImages = [...imageCollection];
let currentLightboxIndex = 0;

const galleryGrid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('searchInput');
const filterChips = document.querySelectorAll('.filter-chip');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lbTitle = document.getElementById('lbTitle');
const lbDesc = document.getElementById('lbDesc');
const totalCountSpan = document.getElementById('totalCount');
const displayCountSpan = document.getElementById('displayCount');
const loadingDiv = document.getElementById('loading');
const noResultsDiv = document.getElementById('noResults');
const scrollTopBtn = document.getElementById('scrollTopBtn');

function updateStats() {
    totalCountSpan.textContent = imageCollection.length;
    displayCountSpan.textContent = currentImages.length;
}

function getCategoryIcon(category) {
    const icons = {
        barcelona: 'fa-futbol',
        argentina: 'fa-flag-checkered',
        trophies: 'fa-trophy',
        iconic: 'fa-star'
    };
    return icons[category] || 'fa-image';
}

function getCategoryColor(category) {
    const colors = {
        barcelona: '#e74c3c',
        argentina: '#3498db',
        trophies: '#f1c40f',
        iconic: '#9b59b6'
    };
    return colors[category] || '#e74c3c';
}

function filterAndSearch() {
    loadingDiv.style.display = 'block';
    galleryGrid.style.display = 'none';
    
    setTimeout(() => {
        let filtered = [...imageCollection];
        
        if (activeFilter !== 'all') {
            filtered = filtered.filter(img => img.category === activeFilter);
        }
        
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(img =>
                img.title.toLowerCase().includes(query) ||
                img.desc.toLowerCase().includes(query) ||
                img.category.toLowerCase().includes(query)
            );
        }
        
        currentImages = filtered;
        updateStats();
        renderGallery();
        loadingDiv.style.display = 'none';
    }, 200);
}

function renderGallery() {
    if (currentImages.length === 0) {
        galleryGrid.style.display = 'none';
        noResultsDiv.style.display = 'block';
        return;
    }
    
    galleryGrid.style.display = 'grid';
    noResultsDiv.style.display = 'none';
    galleryGrid.innerHTML = '';
    
    currentImages.forEach((img, idx) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        const categoryColor = getCategoryColor(img.category);
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${img.url}" 
                     alt="${img.title}"
                     loading="lazy"
                     onerror="this.src='https://placehold.co/800x600/1a1a1a/e74c3c?text=Messi+Image+Here'">
                <div class="card-category" style="background: ${categoryColor}20; border: 1px solid ${categoryColor}40;">
                    <i class="fas ${getCategoryIcon(img.category)}"></i> ${img.category}
                </div>
                <div class="card-overlay">
                    <div class="card-title">${img.title}</div>
                    <div class="card-desc">${img.desc}</div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            currentLightboxIndex = idx;
            openLightbox();
        });
        
        galleryGrid.appendChild(card);
    });
}

function openLightbox() {
    const img = currentImages[currentLightboxIndex];
    lightboxImg.src = img.url;
    lbTitle.textContent = img.title;
    lbDesc.textContent = img.desc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    if (currentLightboxIndex < currentImages.length - 1) {
        currentLightboxIndex++;
        openLightbox();
    }
}

function prevImage() {
    if (currentLightboxIndex > 0) {
        currentLightboxIndex--;
        openLightbox();
    }
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterAndSearch();
});

filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeFilter = chip.getAttribute('data-filter');
        filterAndSearch();
    });
});

document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
document.getElementById('prevBtn').addEventListener('click', prevImage);
document.getElementById('nextBtn').addEventListener('click', nextImage);

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    }
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

function init() {
    updateStats();
    renderGallery();
}

init();