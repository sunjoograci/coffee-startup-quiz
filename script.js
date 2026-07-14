const answers = {};

const KITS = {
  espresso: {
    low: {
      title: "The Easy Espresso Starter",
      sub: "You don't need to spend a fortune to make great espresso at home. This kit gets you 80% of café quality at a fraction of the price.",
      label: "Budget espresso kit",
      total: "Est. $95 total",
      items: [
        { name: "Bialetti Moka Express (3-cup)", why: "Stovetop espresso — strong, rich, nearly identical to a real shot", price: "$30", link: "https://www.amazon.com/s?k=bialetti+moka+express+3+cup" },
        { name: "Timemore C2 hand grinder", why: "Consistent grind at a fraction of electric grinder prices", price: "$50", link: "https://www.amazon.com/s?k=timemore+c2+hand+grinder" },
        { name: "Kitchen scale (0.1g precision)", why: "Measuring is the single biggest upgrade you can make to your brew", price: "$15", link: "https://www.amazon.com/s?k=coffee+scale+0.1g" }
      ]
    },
    mid: {
      title: "The Confident Beginner Kit",
      sub: "A proper semi-automatic espresso machine with a good grinder. This is where home espresso actually starts tasting like the café.",
      label: "Starter espresso kit",
      total: "Est. $425 total",
      items: [
        { name: "Breville Bambino", why: "Best beginner espresso machine — 3-second heat-up, simple controls, great results", price: "$230", link: "https://www.amazon.com/s?k=breville+bambino+espresso" },
        { name: "Baratza Encore grinder", why: "Most recommended beginner grinder by r/espresso — consistent and upgradeable", price: "$170", link: "https://www.amazon.com/s?k=baratza+encore+grinder" },
        { name: "Dosing funnel + tamper set", why: "Keeps your workflow clean and your tamp consistent", price: "$25", link: "https://www.amazon.com/s?k=espresso+dosing+funnel+tamper" }
      ]
    },
    high: {
      title: "The Serious Home Barista Setup",
      sub: "A real espresso machine with a step-up grinder. This setup will last you years and grow with your skills.",
      label: "Enthusiast espresso kit",
      total: "Est. $660 total",
      items: [
        { name: "Breville Barista Express Impress", why: "Built-in grinder, pressure gauge, auto-tamp assist — everything in one unit", price: "$480", link: "https://www.amazon.com/s?k=breville+barista+express+impress" },
        { name: "Acaia Pearl scale", why: "Tracks dose-in and dose-out with a timer — the feedback loop that makes you better", price: "$150", link: "https://www.amazon.com/s?k=acaia+pearl+scale" },
        { name: "Artisan milk pitcher + thermometer", why: "For latte art when you're ready — sooner than you think", price: "$30", link: "https://www.amazon.com/s?k=milk+pitcher+thermometer+barista" }
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
        { name: "Hario V60 (plastic, size 02)", why: "Used by World Barista Champions. Plastic retains heat well and costs almost nothing", price: "$10", link: "https://www.amazon.com/s?k=hario+v60+plastic+02" },
        { name: "Timemore C2 hand grinder", why: "Consistent grind at a fraction of electric grinder prices — invest here first", price: "$50", link: "https://www.amazon.com/s?k=timemore+c2+hand+grinder" },
        { name: "Gooseneck kettle (any brand)", why: "Pour control is everything in pour-over — a gooseneck is non-negotiable", price: "$20", link: "https://www.amazon.com/s?k=gooseneck+kettle+pour+over" }
      ]
    },
    mid: {
      title: "The Pour-Over Ritual Kit",
      sub: "Everything you need to brew world-class filter coffee at home, with room to grow as your technique improves.",
      label: "Pour-over starter kit",
      total: "Est. $365 total",
      items: [
        { name: "Fellow Stagg EKG kettle", why: "Temperature control to 1°F — the single most impactful pour-over upgrade", price: "$165", link: "https://www.amazon.com/s?k=fellow+stagg+ekg+kettle" },
        { name: "Hario V60 (ceramic, size 02)", why: "Better heat retention than plastic. The same brewer pros use in competition", price: "$30", link: "https://www.amazon.com/s?k=hario+v60+ceramic" },
        { name: "Baratza Encore grinder", why: "Consistent, adjustable, upgradeable — the gold standard beginner grinder", price: "$170", link: "https://www.amazon.com/s?k=baratza+encore+grinder" }
      ]
    },
    high: {
      title: "The Pour-Over Enthusiast Lab",
      sub: "For the person who wants to understand every variable and make the best possible cup, every single time.",
      label: "Enthusiast pour-over kit",
      total: "Est. $600 total",
      items: [
        { name: "Fellow Stagg EKG Pro kettle", why: "Bluetooth connectivity and stopwatch mode — pairs with your brew timer perfectly", price: "$200", link: "https://www.amazon.com/s?k=fellow+stagg+ekg+pro" },
        { name: "Fellow Ode Gen 2 grinder", why: "Flat burrs produce a more even particle size — a real upgrade from Encore", price: "$250", link: "https://www.amazon.com/s?k=fellow+ode+gen+2+grinder" },
        { name: "Acaia Pearl scale", why: "Tracks flow rate in real-time — tells you if your pour is consistent", price: "$150", link: "https://www.amazon.com/s?k=acaia+pearl+scale" }
      ]
    }
  },
  coldbrew: {
    low: {
      title: "The Cold Brew Starter",
      sub: "Cold brew is the most forgiving method to learn. This minimal setup makes 32oz batches that last a week in your fridge.",
      label: "Budget cold brew kit",
      total: "Est. $48 total",
      items: [
        { name: "Takeya Cold Brew Maker (1 quart)", why: "Mesh filter, tight lid, makes perfect cold brew overnight — top-rated for 5 years running", price: "$25", link: "https://www.amazon.com/s?k=takeya+cold+brew+maker" },
        { name: "Pre-ground coarse coffee", why: "Cold brew doesn't need a grinder — start with pre-ground to keep it simple", price: "$15", link: "https://www.amazon.com/s?k=coarse+ground+coffee+cold+brew" },
        { name: "Fine-mesh strainer (backup filter)", why: "For a cleaner cup if you want less sediment in the final concentrate", price: "$8", link: "https://www.amazon.com/s?k=fine+mesh+strainer+kitchen" }
      ]
    },
    mid: {
      title: "The Cold Brew Upgrade Kit",
      sub: "Freshly ground beans make cold brew dramatically better. This setup produces concentrate good enough to replace your daily RTD habit.",
      label: "Cold brew kit with fresh grind",
      total: "Est. $228 total",
      items: [
        { name: "OXO Brew Cold Brew Coffee Maker", why: "2-quart capacity, rainmaker lid for even saturation, clean concentrate every time", price: "$40", link: "https://www.amazon.com/s?k=oxo+brew+cold+brew+coffee+maker" },
        { name: "Baratza Encore (set to coarse)", why: "Same grinder, wide grind range — dial to coarse for cold brew perfection", price: "$170", link: "https://www.amazon.com/s?k=baratza+encore+grinder" },
        { name: "Airtight glass pitcher", why: "Keeps cold brew fresh for up to 2 weeks in the fridge", price: "$18", link: "https://www.amazon.com/s?k=glass+pitcher+airtight+cold+brew" }
      ]
    },
    high: {
      title: "The Cold Coffee Obsessive Setup",
      sub: "Dutch-style slow drip cold brew and a dedicated iced espresso rig. The full cold coffee spectrum.",
      label: "Premium cold coffee kit",
      total: "Est. $430 total",
      items: [
        { name: "Yama Glass Cold Drip Tower", why: "Slow-drip cold brew takes 8 hours but produces a silkier, more complex cup than immersion", price: "$150", link: "https://www.amazon.com/s?k=yama+glass+cold+drip+tower" },
        { name: "Breville Bambino (for iced espresso)", why: "Pull a double shot directly over ice — 'flash chill' espresso is a revelation", price: "$230", link: "https://www.amazon.com/s?k=breville+bambino+espresso" },
        { name: "Timemore C2 (compact, for travel)", why: "Make cold brew concentrate anywhere — hotel, camping, office", price: "$50", link: "https://www.amazon.com/s?k=timemore+c2+hand+grinder" }
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
        { name: "AeroPress (original)", why: "The most versatile brewer ever made — espresso-style, filter, and cold brew concentrate", price: "$35", link: "https://www.amazon.com/s?k=aeropress+coffee+maker+original" },
        { name: "Timemore C2 hand grinder", why: "Works for every brew method and produces a consistent grind at this price", price: "$50", link: "https://www.amazon.com/s?k=timemore+c2+hand+grinder" },
        { name: "Takeya Cold Brew Maker", why: "Add cold brew capability — let your first batch steep tonight while you try AeroPress tomorrow", price: "$25", link: "https://www.amazon.com/s?k=takeya+cold+brew+maker" }
      ]
    },
    mid: {
      title: "The Versatile Hobbyist Kit",
      sub: "A setup that covers espresso-style drinks AND filter coffee — the two methods most people end up loving.",
      label: "Multi-method starter kit",
      total: "Est. $445 total",
      items: [
        { name: "Breville Bambino", why: "Best beginner espresso machine — covers lattes, cappuccinos, and straight shots", price: "$230", link: "https://www.amazon.com/s?k=breville+bambino+espresso" },
        { name: "Baratza Encore grinder", why: "The only grinder that handles both espresso and pour-over at this price", price: "$170", link: "https://www.amazon.com/s?k=baratza+encore+grinder" },
        { name: "Hario V60 + gooseneck kettle", why: "For pour-over days — a completely different coffee experience on the same grinder", price: "$40", link: "https://www.amazon.com/s?k=hario+v60+gooseneck+kettle+set" }
      ]
    },
    high: {
      title: "The Complete Home Coffee Bar",
      sub: "You want it all. Here's how to build a setup that handles every single coffee drink with no compromises.",
      label: "Full home coffee bar kit",
      total: "Est. $720 total",
      items: [
        { name: "Breville Barista Express Impress", why: "Built-in grinder handles espresso — one less device on your counter", price: "$480", link: "https://www.amazon.com/s?k=breville+barista+express+impress" },
        { name: "Fellow Stagg EKG kettle", why: "Temperature-controlled for pour-over and Chemex on non-espresso days", price: "$165", link: "https://www.amazon.com/s?k=fellow+stagg+ekg+kettle" },
        { name: "OXO Cold Brew Maker", why: "Always have concentrate in the fridge — 5 seconds to pour over ice", price: "$40", link: "https://www.amazon.com/s?k=oxo+brew+cold+brew+coffee+maker" }
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

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let modalType = 'guide';

function openModal(type) {
  modalType = type;
  document.getElementById('modal-title-text').textContent = 'Join our brew coach app waitlist';
  document.getElementById('modal-sub').textContent = "Drop your email and we'll notify you as soon as the app launches — early access to learn how to dial in your perfect brew.";
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

function handleSubmit() {
  const email = document.getElementById('email-input').value.trim();
  if (!email || !email.includes('@')) {
    document.getElementById('email-input').style.borderColor = '#E24B4A';
    document.getElementById('email-input').focus();
    return;
  }
  document.getElementById('modal-form-state').style.display = 'none';
  document.getElementById('modal-success-state').style.display = 'block';
  console.log('Email captured:', email, 'type:', modalType, 'kit:', getKit().title, 'answers:', answers);
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
