const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = `
    <footer class="mt-10 border-t border-slate-200 bg-white text-[#0E152B]">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#4d89bc]">Appliance Repair Silver Spring</p>
            <h2 class="mt-4 text-3xl font-semibold leading-tight text-[#0E152B] sm:text-4xl">
              Local appliance repair that keeps your home running.
            </h2>
            <p class="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Friendly local repair for washers, dryers, refrigerators, ovens, stoves, and dishwashers across the Greater Silver Spring area.
            </p>
          </div>

          <div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-end">
            <a href="tel:2404387799" class="inline-flex items-center justify-center gap-3 rounded-full bg-[#0E152B] px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#182345]">
              <i class="fa-solid fa-phone-volume"></i>
              Call (240) 438-7799
            </a>
            <a href="./contact.html" class="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E152B] transition hover:border-[#6eaadc] hover:bg-[#f3f8fc]">
              Contact Us
              <i class="fa-solid fa-arrow-right text-xs text-[#4d89bc]"></i>
            </a>
          </div>
        </div>

        <div class="grid gap-10 pt-10 lg:grid-cols-[1.2fr_0.8fr_0.95fr_1fr] lg:gap-12">
          <div>
            <img src="./docs/assets/logo.png" alt="Appliance Repair Silver Spring logo" class="h-14 w-auto" />
            <p class="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              Reliable service, clear communication, and local support for the appliances your household uses every day.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-[#f7fafc] text-[#4d89bc] transition hover:border-[#6eaadc] hover:bg-[#edf5fb] hover:text-[#0E152B]">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-[#f7fafc] text-[#4d89bc] transition hover:border-[#6eaadc] hover:bg-[#edf5fb] hover:text-[#0E152B]">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#4d89bc]">Quick Links</p>
            <ul class="mt-5 space-y-3 text-sm text-slate-600">
              <li><a href="./index.html" class="transition hover:text-[#0E152B]">Home</a></li>
              <li><a href="./about.html" class="transition hover:text-[#0E152B]">About</a></li>
              <li><a href="./services.html" class="transition hover:text-[#0E152B]">Services</a></li>
              <li><a href="./faq.html" class="transition hover:text-[#0E152B]">FAQ</a></li>
              <li><a href="./contact.html" class="transition hover:text-[#0E152B]">Contact</a></li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#4d89bc]">Services</p>
            <ul class="mt-5 space-y-3 text-sm text-slate-600">
              <li><a href="./washer-repair.html" class="transition hover:text-[#0E152B]">Washer Repair</a></li>
              <li><a href="./dryer-repair.html" class="transition hover:text-[#0E152B]">Dryer Repair</a></li>
              <li><a href="./refrigerator-repair.html" class="transition hover:text-[#0E152B]">Refrigerator Repair</a></li>
              <li><a href="./oven-repair.html" class="transition hover:text-[#0E152B]">Oven Repair</a></li>
              <li><a href="./stove-repair.html" class="transition hover:text-[#0E152B]">Stove Repair</a></li>
              <li><a href="./dishwasher-repair.html" class="transition hover:text-[#0E152B]">Dishwasher Repair</a></li>
            </ul>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#4d89bc]">Contact Info</p>
            <div class="mt-5 space-y-4 text-sm text-slate-600">
              <a href="tel:2404387799" class="flex items-start gap-3 transition hover:text-[#0E152B]">
                <span class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#eef5fb] text-[#4d89bc]">
                  <i class="fa-solid fa-phone text-xs"></i>
                </span>
                <span>(240) 438-7799</span>
              </a>
              <a href="mailto:info@appliancerepairsilverspring.com" class="flex items-start gap-3 transition hover:text-[#0E152B]">
                <span class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#eef5fb] text-[#4d89bc]">
                  <i class="fa-solid fa-envelope text-xs"></i>
                </span>
                <span>info@appliancerepairsilverspring.com</span>
              </a>
              <div class="flex items-start gap-3">
                <span class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#eef5fb] text-[#4d89bc]">
                  <i class="fa-solid fa-location-dot text-xs"></i>
                </span>
                <span>9466 Georgia Ave, Silver Spring, MD 20910</span>
              </div>
              <div class="flex items-start gap-3">
                <span class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#eef5fb] text-[#4d89bc]">
                  <i class="fa-solid fa-clock text-xs"></i>
                </span>
                <span>Hours: 8 AM - 6 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#0E152B] px-4 py-5 text-white sm:px-6 lg:px-8">
        <div class="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; <span data-year></span> Appliance Repair Silver Spring. All rights reserved.</p>
          <div class="flex flex-wrap items-center gap-4">
            <span>Silver Spring, MD</span>
            <a href="https://www.appliancerepairsilverspring.com" class="transition hover:text-white">appliancerepairsilverspring.com</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  const year = footer.querySelector("[data-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

