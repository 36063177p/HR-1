// ===== تحسينات مجموعة الشهباء التجارية =====

// تبسيط النظام للاكتفاء بالموقع الجغرافي فقط
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏢 تحميل تحسينات مجموعة الشهباء التجارية...');
    
    // إزالة جميع العناصر المتعلقة بالطرق الأخرى
    setTimeout(() => {
        const elementsToHide = [
            'qrMethod', 'wifiMethod', 'passwordMethod',
            'qrMethodBtn', 'wifiMethodBtn', 'passwordMethodBtn',
            'smartRecommendation', 'method-buttons'
        ];
        
        elementsToHide.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'none';
            }
        });
        
        // إخفاء أي عناصر بـ class
        const classesToHide = ['method-buttons', 'attendance-methods'];
        classesToHide.forEach(className => {
            const elements = document.getElementsByClassName(className);
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
        });
        
        console.log('✅ تم تبسيط النظام للاكتفاء بالموقع الجغرافي فقط');
    }, 500);
});

// دالة محسنة لتحديث حالة الموقع بتصميم الشهباء
function updateShahbaLocationStatus(message, type = 'info') {
    const locationStatus = document.getElementById('locationStatus');
    if (locationStatus) {
        const colors = {
            success: 'linear-gradient(135deg, #4caf50, #66bb6a)',
            error: 'linear-gradient(135deg, #f44336, #e57373)',
            warning: 'linear-gradient(135deg, #ffc107, #ffeb3b)',
            info: 'linear-gradient(135deg, #2e7d32, #4caf50)'
        };
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: '🔍'
        };
        
        locationStatus.innerHTML = `
            <div style="text-align: center; color: white;">
                <div style="font-size: 32px; margin-bottom: 15px;">${icons[type] || icons.info}</div>
                <p style="margin: 0; font-size: 18px; font-weight: 600;">${message}</p>
            </div>
        `;
        
        locationStatus.style.background = colors[type] || colors.info;
        locationStatus.style.border = '2px solid rgba(255,255,255,0.3)';
        locationStatus.style.animation = 'pulseGlow 2s ease-in-out infinite';
    }
}

// إضافة CSS للتأثيرات المتحركة
const shahbaCSS = `
<style>
@keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 10px rgba(255,255,255,0.3); }
    50% { box-shadow: 0 0 25px rgba(255,255,255,0.6); }
}

.shahba-enhanced {
    transition: all 0.3s ease;
}

.shahba-enhanced:hover {
    transform: scale(1.02);
}

/* تحسين الخطوط العربية */
body {
    font-family: 'Segoe UI', 'Tahoma', 'Arial', sans-serif;
}

.arabic-text {
    font-family: 'Tahoma', 'Arabic UI Text', 'Segoe UI', Arial, sans-serif;
}
</style>
`;

// إضافة الـ CSS للصفحة
document.head.insertAdjacentHTML('beforeend', shahbaCSS);

// تحسين دالة تحديث الوقت الحالي
function enhanceCurrentTime() {
    const timeElement = document.getElementById('currentTime');
    const dateElement = document.getElementById('currentDate');
    
    if (timeElement && dateElement) {
        const now = new Date();
        
        // تنسيق الوقت
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
            timeZone: 'Asia/Riyadh'
        };
        
        // تنسيق التاريخ
        const dateOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Riyadh'
        };
        
        timeElement.textContent = now.toLocaleTimeString('ar-SA', timeOptions);
        // استخدام دالة formatDate الموحدة للتطبيق
        if (typeof formatDate === 'function') {
            dateElement.textContent = formatDate(now);
        } else {
            // Fallback للحالات الاستثنائية
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            dateElement.textContent = `${day}-${month}-${year}`;
        }
        
        // إضافة تأثير متحرك للوقت
        timeElement.style.animation = 'none';
        setTimeout(() => {
            timeElement.style.animation = 'pulseTime 1s ease-in-out';
        }, 10);
    }
}

// تحديث الوقت كل ثانية مع تحسينات
setInterval(enhanceCurrentTime, 1000);

// CSS إضافي للوقت
const timeCSS = `
<style>
@keyframes pulseTime {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

#currentTime {
    background: linear-gradient(45deg, #2e7d32, #4caf50);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', timeCSS);

// دالة لإضافة شعار الشهباء (اختياري)
function addShahbaLogo() {
    const headers = document.querySelectorAll('.header h1');
    headers.forEach(header => {
        if (!header.querySelector('.shahba-logo')) {
            const logo = document.createElement('span');
            logo.className = 'shahba-logo';
            logo.innerHTML = '🏢';
            logo.style.marginLeft = '10px';
            logo.style.fontSize = '1.2em';
            header.prepend(logo);
        }
    });
}

// تطبيق الشعار
setTimeout(addShahbaLogo, 1000);

// دالة لإضافة قسم الإصلاحات السريعة للموظفين
function addEmployeeQuickFixes() {
    if (!currentUser || currentUser.role !== 'employee') {
        return;
    }
    
    const reportContainer = document.getElementById('employeeFinancialReport');
    if (!reportContainer) {
        console.log('❌ لا يوجد قسم البيان المالي للموظف');
        return;
    }
    
    // فحص إذا كان القسم موجود بالفعل
    if (document.getElementById('employeeQuickFixSection')) {
        console.log('✅ قسم الإصلاحات السريعة موجود بالفعل');
        return;
    }
    
    const quickFixSection = document.createElement('div');
    quickFixSection.id = 'employeeQuickFixSection';
    quickFixSection.innerHTML = `
        <div style="background: linear-gradient(135deg, #fff3cd, #ffeaa7); border: 2px solid #ffc107; border-radius: 8px; padding: 15px; margin: 15px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h4 style="color: #856404; margin: 0 0 10px 0; display: flex; align-items: center;">
                ⚡ إصلاحات سريعة للموظف
            </h4>
            <p style="margin: 0 0 10px 0; color: #856404; font-size: 14px;">
                استخدم هذه الأزرار لحل المشاكل الشائعة في البيان المالي:
            </p>
            
            <button onclick="forceFixFinancialDisplay()" 
                    style="background: #28a745; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; margin: 5px; font-size: 12px;">
                🔧 إصلاح فوري
            </button>
            
            <button onclick="showAllEmployeeFinancialData()" 
                    style="background: #6f42c1; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; margin: 5px; font-size: 12px;">
                📋 عرض جميع البيانات
            </button>
            
            <button onclick="removeTestDataOnly()" 
                    style="background: #dc3545; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; margin: 5px; font-size: 12px;">
                🗑️ حذف التجريبية
            </button>
            
            <button onclick="fixFinancialDatesFormat()" 
                    style="background: #fd7e14; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; margin: 5px; font-size: 12px;">
                📅 إصلاح التواريخ
            </button>
            
        </div>
    `;
    
    reportContainer.insertBefore(quickFixSection, reportContainer.firstChild);
    
    console.log('✅ تم إضافة قسم الإصلاحات السريعة للموظف مع زر إصلاح التواريخ');
}

// إضافة قسم الإصلاحات السريعة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // انتظار تحميل المستخدم
    setTimeout(() => {
        addEmployeeQuickFixes();
    }, 2000);
});

// إضافة القسم عند تسجيل دخول الموظف
const originalLoadEmployeeFinancialReport = window.loadEmployeeFinancialReport;
if (originalLoadEmployeeFinancialReport) {
    window.loadEmployeeFinancialReport = function() {
        const result = originalLoadEmployeeFinancialReport.apply(this, arguments);
        
        // إضافة قسم الإصلاحات السريعة
        setTimeout(() => {
            addEmployeeQuickFixes();
        }, 500);
        
        return result;
    };
}

console.log('🎉 تم تحميل جميع تحسينات مجموعة الشهباء التجارية بنجاح!'); 