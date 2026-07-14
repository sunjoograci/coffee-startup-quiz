const answers = {};

// Track page view
if (typeof posthog !== 'undefined') {
  posthog.startPageView();
}

const KITS = {
  espresso: {
    low: {
      title: "The Easy Espresso Starter",
      sub: "You don't need to spend a fortune to make great espresso at home. This kit gets you 80% of café quality at a fraction of the price.",
      label: "Budget espresso kit",
      total: "Est. $95 total",
      items: [
        { name: "Bialetti Moka Express (3-cup)", why: "Stovetop espresso that's strong, rich, nearly identical to a real shot", price: "$30", link: "https://www.amazon.com/Bialetti-Express-Stainless-Stovetop-Espresso/dp/B0000CF3TY" },
        { name: "Timemore C2 hand grinder", why: "Consistent grind for way less than an electric grinder", price: "$50", link: "https://www.amazon.com/Timemore-Portable-Manual-Grinder-Capacity/dp/B01N4PFUHK" },
        { name: "Kitchen scale (0.1g precision)", why: "Measuring your coffee is the single biggest upgrade you can make to your brew", price: "$15", link: "https://www.amazon.com/Hario-Scale-Accuracy-Drip-Scale/dp/B001RF3XJ2" }
      ]
    },
    mid: {
      title: "The Confident Beginner Kit",
      sub: "A proper semi-automatic espresso machine with a good grinder. This is where home espresso actually starts tasting like the café.",
      label: "Starter espresso kit",
      total: "Est. $425 total",
      items: [
        { name: "Breville Bambino", why: "The best beginner espresso machine. It heats up in 3 seconds, has simple controls, and makes great results", price: "$230", link: "https://www.amazon.com/Breville-Bambino-Espresso-Machine-BES450XL/dp/B00MV8W2MS" },
        { name: "Baratza Encore grinder", why: "Most recommended beginner grinder for a reason. Consistent, upgradeable, reliable", price: "$170", link: "https://www.amazon.com/Baratza-Encore-Conical-Burr-Grinder/dp/B00LW8477M" },
        { name: "Dosing funnel + tamper set", why: "Keeps your workflow clean and makes your tamp more consistent", price: "$25", link: "https://www.amazon.com/ESPRESSO-Distribution-Aluminum-Compatible-Machines/dp/B07KSBW5BF" }
      ]
    },
    high: {
      title: "The Serious Home Barista Setup",
      sub: "A real espresso machine paired with a dedicated burr grinder. This setup will last you years and grow with your skills.",
      label: "Enthusiast espresso kit",
      total: "Est. $810 total",
      items: [
        { name: "Breville Barista Express Impress", why: "Built-in grinder, pressure gauge, auto-tamp assist. Everything you need in one unit", price: "$480", link: "https://www.amazon.com/Breville-Barista-Express-Impress-BES876BSS/dp/B07Y3VPHBF" },
        { name: "Baratza Sette 270 grinder", why: "Dedicated espresso grinder with micro-adjustments. Your built-in grinder will only take you so far", price: "$140", link: "https://www.amazon.com/Baratza-Sette-270-Conical-Grinder/dp/B01IHQJWSE" },
        { name: "Acaia Pearl scale", why: "Tracks exactly how much coffee goes in and comes out, with a built-in timer. This is how you actually dial in shots", price: "$150", link: "https://espressoparts.com/products/acaia-pearl-model-s-black?variant=37557472035003&country=US&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic" },
        { name: "Milk pitcher + thermometer", why: "For making latte art when you're ready. You'll get there sooner than you think", price: "$40", link: "https://www.amazon.com/Rattleware-Stainless-Espresso-Steaming-Pitcher/dp/B00OXGZJVI" }
      ]
    }
  },
  pourover: {
    low: {
      title: "The Minimalist Pour-Over Kit",
      sub: "Pour-over is one of the cheapest ways to make world-class coffee. This setup costs less than a week of café visits.",
      label: "Budget pour-over kit",
      total: "Est. $80 total",
      items: [
        { name: "Hario V60 (plastic, size 02)", why: "Used by World Barista Champions. Plastic holds heat well and costs almost nothing", price: "$10", link: "https://www.amazon.com/Hario-Plastic-Dripper-Coffee-VD-02P/dp/B001RXGWKY" },
        { name: "Timemore C2 hand grinder", why: "Consistent grind for a fraction of what electric grinders cost. Invest here first", price: "$50", link: "https://www.amazon.com/Timemore-Portable-Manual-Grinder-Capacity/dp/B01N4PFUHK" },
        { name: "Gooseneck kettle (any brand)", why: "Pour control is everything in pour-over. A gooseneck isn't optional, it's essential", price: "$20", link: "https://www.amazon.com/Fellow-Stagg-Gooseneck-Kettle-Pouring/dp/B00B4SKF4W" }
      ]
    },
    mid: {
      title: "The Pour-Over Ritual Kit",
      sub: "Everything you need to brew world-class filter coffee at home, with room to grow as your technique improves.",
      label: "Pour-over starter kit",
      total: "Est. $365 total",
      items: [
        { name: "Fellow Stagg EKG kettle", why: "Temperature control to 1 degree. This is the single most impactful upgrade for pour-over brewing", price: "$165", link: "https://www.amazon.com/Fellow-Stagg-Gooseneck-Kettle-Electric/dp/B08FXNBSRR" },
        { name: "Hario V60 (ceramic, size 02)", why: "Better heat retention than plastic. The same brewer competition baristas use", price: "$30", link: "https://www.amazon.com/Hario-Ceramic-Coffee-Dripper-VD-02R/dp/B001V44WPG" },
        { name: "Baratza Encore grinder", why: "Consistent, adjustable, upgradeable. The gold standard beginner grinder", price: "$170", link: "https://www.amazon.com/Baratza-Encore-Conical-Burr-Grinder/dp/B00LW8477M" }
      ]
    },
    high: {
      title: "The Pour-Over Enthusiast Lab",
      sub: "For the person who wants to understand every variable and make the best possible cup, every single time.",
      label: "Enthusiast pour-over kit",
      total: "Est. $600 total",
      items: [
        { name: "Fellow Stagg EKG Pro kettle", why: "Bluetooth connectivity and stopwatch mode. Pairs perfectly with your brew timer", price: "$200", link: "https://www.amazon.com/Fellow-Stagg-EKG-Gooseneck-Kettle/dp/B0851D3C5D" },
        { name: "Fellow Ode Gen 2 grinder", why: "Flat burrs produce more even particle size. A real upgrade from conical burrs", price: "$250", link: "https://www.amazon.com/Fellow-Ode-Grinder-Stainless-Steel/dp/B095GQRXPP" },
        { name: "Acaia Pearl scale", why: "Tracks your flow rate in real-time. Tells you if your pour is consistent", price: "$150", link: "https://espressoparts.com/products/acaia-pearl-model-s-black?variant=37557472035003&country=US&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic" }
      ]
    }
  },
  coldbrew: {
    low: {
      title: "The Cold Brew Starter",
      sub: "Cold brew is the most forgiving brewing method to learn. This setup makes 32oz batches that stay fresh in your fridge for a week.",
      label: "Budget cold brew kit",
      total: "Est. $48 total",
      items: [
        { name: "Takeya Cold Brew Maker (1 quart)", why: "Mesh filter, tight lid, makes perfect cold brew overnight. Top-rated for years", price: "$25", link: "https://www.amazon.com/Takeya-Patented-Airtight-Silicone-Seal/dp/B00INXSMBY" },
        { name: "Pre-ground coarse coffee", why: "Cold brew doesn't need a grinder. Start with pre-ground to keep things simple", price: "$15", link: "https://www.amazon.com/s?k=coarse+ground+coffee+cold+brew&i=grocery" },
        { name: "Fine-mesh strainer (backup filter)", why: "For a cleaner cup if you want less sediment in your final concentrate", price: "$8", link: "https://www.amazon.com/OXO-Stainless-Steel-Micro-Strainer/dp/B00006JPGE" }
      ]
    },
    mid: {
      title: "The Cold Brew Upgrade Kit",
      sub: "Freshly ground beans make cold brew dramatically better. This setup produces concentrate good enough to replace your daily store-bought habit.",
      label: "Cold brew kit with fresh grind",
      total: "Est. $228 total",
      items: [
        { name: "OXO Brew Cold Brew Coffee Maker", why: "2-quart capacity with a rainmaker lid for even saturation. Clean concentrate every time", price: "$40", link: "https://www.amazon.com/OXO-Brew-Smart-Seal-Bottle/dp/B00OCCMHVS" },
        { name: "Baratza Encore (set to coarse)", why: "Same grinder with a wide range. Just dial it to coarse for cold brew perfection", price: "$170", link: "https://www.amazon.com/Baratza-Encore-Conical-Burr-Grinder/dp/B00LW8477M" },
        { name: "Airtight glass pitcher", why: "Keeps cold brew fresh for up to 2 weeks in the fridge", price: "$18", link: "https://www.amazon.com/Pyrex-Non-Reactive-Borosilicate-Microwave-Compatible-Containers/dp/B00JSNIRFI" }
      ]
    },
    high: {
      title: "The Cold Coffee Obsessive Setup",
      sub: "Dutch-style slow drip cold brew and a dedicated iced espresso rig. The full cold coffee spectrum.",
      label: "Premium cold coffee kit",
      total: "Est. $430 total",
      items: [
        { name: "Yama Glass Cold Drip Tower", why: "Slow-drip cold brew takes 8 hours but produces a silkier, more complex cup than just steeping", price: "$150", link: "https://www.amazon.com/Yama-Glass-Cold-Drip-Maker/dp/B00E6LFSHS" },
        { name: "Breville Bambino (for iced espresso)", why: "Pull a double shot directly over ice. Flash-chilled espresso is a revelation", price: "$230", link: "https://www.amazon.com/Breville-Bambino-Espresso-Machine-BES450XL/dp/B00MV8W2MS" },
        { name: "Timemore C2 (compact, for travel)", why: "Make cold brew concentrate anywhere, hotel, camping, your office", price: "$50", link: "https://www.amazon.com/Timemore-Portable-Manual-Grinder-Capacity/dp/B01N4PFUHK" }
      ]
    }
  },
  mixed: {
    low: {
      title: "The Curious Beginner Kit",
      sub: "Not sure what you'll love yet? This setup lets you try multiple styles without committing to expensive equipment.",
      label: "Versatile starter kit",
      total: "Est. $110 total",
      items: [
        { name: "AeroPress (original)", why: "The most versatile brewer ever made. You can make espresso-style, filter coffee, or cold brew concentrate", price: "$35", link: "https://www.amazon.com/Aeropress-Coffee-Maker-Micro-Filter-Cartridges/dp/B0018RCJMI" },
        { name: "Timemore C2 hand grinder", why: "Works for every brewing method and produces a consistent grind at this price", price: "$50", link: "https://www.amazon.com/Timemore-Portable-Manual-Grinder-Capacity/dp/B01N4PFUHK" },
        { name: "Takeya Cold Brew Maker", why: "Add cold brew capability. Let your first batch steep overnight while you try the AeroPress tomorrow", price: "$25", link: "https://www.amazon.com/Takeya-Patented-Airtight-Silicone-Seal/dp/B00INXSMBY" }
      ]
    },
    mid: {
      title: "The Versatile Hobbyist Kit",
      sub: "A setup that covers espresso-style drinks and filter coffee. The two methods most people end up loving.",
      label: "Multi-method starter kit",
      total: "Est. $445 total",
      items: [
        { name: "Breville Bambino", why: "Best beginner espresso machine. Makes lattes, cappuccinos, and straight shots well", price: "$230", link: "https://www.amazon.com/Breville-Bambino-Espresso-Machine-BES450XL/dp/B00MV8W2MS" },
        { name: "Baratza Encore grinder", why: "The only grinder that handles both espresso and pour-over at this price", price: "$170", link: "https://www.amazon.com/Baratza-Encore-Conical-Burr-Grinder/dp/B00LW8477M" },
        { name: "Hario V60 + gooseneck kettle", why: "For your pour-over days. A completely different coffee experience on the same grinder", price: "$40", link: "https://www.amazon.com/s?k=hario+v60+gooseneck+kettle+set" }
      ]
    },
    high: {
      title: "The Complete Home Coffee Bar",
      sub: "You want it all. Here's how to build a setup that handles every single coffee drink with no compromises.",
      label: "Full home coffee bar kit",
      total: "Est. $720 total",
      items: [
        { name: "Breville Barista Express Impress", why: "Built-in grinder handles espresso, so you have one less device cluttering your counter", price: "$480", link: "https://www.amazon.com/Breville-Barista-Express-Impress-BES876BSS/dp/B07Y3VPHBF" },
        { name: "Fellow Stagg EKG kettle", why: "Temperature-controlled for pour-over and Chemex on days you want something different", price: "$165", link: "https://www.amazon.com/Fellow-Stagg-Gooseneck-Kettle-Electric/dp/B08FXNBSRR" },
        { name: "OXO Cold Brew Maker", why: "Always have concentrate in the fridge. Grab it and pour over ice in 5 seconds", price: "$40", link: "https://www.amazon.com/OXO-Brew-Smart-Seal-Bottle/dp/B00OCCMHVS" }
      ]
    }
  }
};

function getKit() {
  const method = answers[0] || 'espresso';
  const budget = answers[1] || 'mid';
  const tier = budget === 'low' ? 'low' : (budget === 'pro' || budget === 'high') ? 'high' : 'mid';
  return KITS[method]?.[tier] || KITS.espresso.mid;
}

document.querySelectorAll('.opt').forEach(opt => {
  opt.addEventListener('click', function () {
    const step = parseInt(this.dataset.step);
    document.querySelectorAll(`.opt[data-step="${step}"]`).forEach(o => o.classList.remove('selected'));
    this.classList.add('selected');
    answers[step] = this.dataset.val;
    const btn = document.getElementById(`next-${step}`);
    if (btn) btn.classList.add('ready');
  });
});

let currentStep = 0;
const totalSteps = 5;

function updateProgress(step) {
  const pct = Math.round(((step + 1) / totalSteps) * 100);
  document.getElementById('progress').style.width = pct + '%';
  document.getElementById('step-label').textContent = `Step ${step + 1} of ${totalSteps}`;
  document.getElementById('step-pct').textContent = pct + '%';
}

function advance(step) {
  if (!answers[step]) return;
  document.getElementById(`step-${step}`).classList.remove('active');
  currentStep = step + 1;
  document.getElementById(`step-${currentStep}`).classList.add('active');
  updateProgress(currentStep);
  if (typeof posthog !== 'undefined') {
    posthog.capture('quiz_step_completed', { step, answer: answers[step] });
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function back(step) {
  document.getElementById(`step-${step}`).classList.remove('active');
  currentStep = step - 1;
  document.getElementById(`step-${currentStep}`).classList.add('active');
  updateProgress(currentStep);
}

function showResult() {
  if (!answers[4]) return;
  const kit = getKit();
  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('result-section').style.display = 'block';
  document.getElementById('result-title').textContent = kit.title;
  document.getElementById('result-sub').textContent = kit.sub;
  document.getElementById('kit-label').textContent = kit.label;
  document.getElementById('kit-total').textContent = kit.total;

  const itemsEl = document.getElementById('kit-items');
  itemsEl.innerHTML = '';
  kit.items.forEach(item => {
    itemsEl.innerHTML += `<div class="kit-item">
      <div>
        <div class="item-name">${item.name}</div>
        <div class="item-why">${item.why}</div>
      </div>
      <div class="item-right">
        <span class="item-price">${item.price}</span>
        <a class="item-link" href="${item.link}" target="_blank" rel="noopener">Buy <svg viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </div>
    </div>`;
  });

  if (typeof posthog !== 'undefined') {
    posthog.capture('quiz_completed', {
      kit: kit.title,
      answers
    });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let modalType = 'guide';

function openModal(type) {
  modalType = type;
  document.getElementById('modal-title-text').textContent = 'Join our brew coach app waitlist';
  document.getElementById('modal-sub').textContent = "Drop your email and we'll notify you as soon as the app launches. You'll get early access to learn how to dial in your perfect brew.";
  document.getElementById('modal-submit-btn').textContent = 'Join the waitlist →';
  document.getElementById('modal-form-state').style.display = 'block';
  document.getElementById('modal-success-state').style.display = 'none';
  document.getElementById('modal-bg').classList.add('open');
  setTimeout(() => document.getElementById('email-input').focus(), 100);
}

function closeModal() {
  document.getElementById('modal-bg').classList.remove('open');
}

document.getElementById('modal-bg').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

async function handleSubmit() {
  const email = document.getElementById('email-input').value.trim();
  if (!email || !email.includes('@')) {
    console.log('Email validation failed:', { email, hasAt: email.includes('@') });
    document.getElementById('email-input').style.borderColor = '#E24B4A';
    document.getElementById('email-input').focus();
    return;
  }

  const kit = getKit();
  const submitBtn = document.getElementById('modal-submit-btn');
  const emailInput = document.getElementById('email-input');
  const originalText = submitBtn.textContent;

  submitBtn.textContent = 'Joining...';
  submitBtn.disabled = true;
  emailInput.style.borderColor = '';

  if (typeof posthog !== 'undefined') {
    posthog.capture('waitlist_signup_attempt', {
      type: modalType,
      kit: kit.title
    });
  }

  try {
    console.log('Submitting email:', email);
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        type: modalType,
        kit: kit.title,
        answers
      })
    });

    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', data);

    if (!response.ok) throw new Error(data.error || 'Failed to save email');

    if (typeof posthog !== 'undefined') {
      posthog.capture('waitlist_signup_success', {
        type: modalType,
        kit: kit.title
      });
      posthog.identify(email, { email });
    }

    document.getElementById('modal-form-state').style.display = 'none';
    document.getElementById('modal-success-state').style.display = 'block';
  } catch (error) {
    console.error('Error saving email:', error);
    if (typeof posthog !== 'undefined') {
      posthog.capture('waitlist_signup_error', {
        error: error.message,
        type: modalType
      });
    }
    emailInput.style.borderColor = '#E24B4A';
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}

function restartQuiz() {
  Object.keys(answers).forEach(k => delete answers[k]);
  document.querySelectorAll('.opt').forEach(o => o.classList.remove('selected'));
  document.querySelectorAll('.btn-next').forEach(b => b.classList.remove('ready'));
  currentStep = 0;
  document.getElementById('result-section').style.display = 'none';
  document.getElementById('quiz-section').style.display = 'block';
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById('step-0').classList.add('active');
  updateProgress(0);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
