// Clipboard History - Onboarding Script

document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const totalSlides = 3;

    const container = document.getElementById('slidesContainer');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.getElementById('nextBtn');
    const skipBtn = document.getElementById('skipBtn');

    if (!container || !nextBtn || !skipBtn) {
        return;
    }

    function goToSlide(index) {
        currentSlide = Math.max(0, Math.min(index, totalSlides - 1));
        container.style.transform = 'translateX(-' + (currentSlide * 100) + 'vw)';

        // Update dots
        dots.forEach(function (dot, i) {
            dot.classList.toggle('active', i === currentSlide);
        });

        // Update buttons
        if (currentSlide === totalSlides - 1) {
            nextBtn.textContent = 'Get Started';
            nextBtn.classList.remove('btn-primary');
            nextBtn.classList.add('btn-success');
            skipBtn.hidden = true;
        } else {
            nextBtn.textContent = 'Next';
            nextBtn.classList.add('btn-primary');
            nextBtn.classList.remove('btn-success');
            skipBtn.hidden = false;
        }
    }

    // Dot navigation
    dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
            goToSlide(parseInt(this.dataset.slide));
        });
    });

    // Next button
    nextBtn.addEventListener('click', function () {
        if (currentSlide === totalSlides - 1) {
            completeOnboarding();
        } else {
            goToSlide(currentSlide + 1);
        }
    });

    // Skip button
    skipBtn.addEventListener('click', function () {
        completeOnboarding();
    });

    // Complete onboarding
    function completeOnboarding() {
        if (typeof chrome !== 'undefined' && chrome.storage) {
            chrome.storage.local.set({ onboardingComplete: true });
        }

        nextBtn.textContent = 'You\'re all set!';
        nextBtn.style.pointerEvents = 'none';
        nextBtn.disabled = true;

        var msg = document.createElement('div');
        msg.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #18181B; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 32px; text-align: center; z-index: 100;';
        msg.innerHTML = '<div style="font-size: 48px; margin-bottom: 16px;">&#127881;</div><h2 style="font-size: 20px; margin-bottom: 8px; color: white;">You\'re Ready!</h2><p style="color: #71717A; font-size: 14px;">Click the extension icon in your toolbar to start.</p>';
        document.body.appendChild(msg);

        setTimeout(function () {
            try {
                window.close();
            } catch (e) {
                // Could not auto-close
            }
        }, 3000);
    }

    // Keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            if (currentSlide < totalSlides - 1) {
                goToSlide(currentSlide + 1);
            }
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goToSlide(currentSlide - 1);
        } else if (e.key === 'Enter') {
            nextBtn.click();
        }
    });
});
