/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Clock, 
  MapPin, 
  Phone, 
  Coffee, 
  Utensils, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Menu as MenuIcon, 
  X,
  Star,
  Heart,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

const HOURS = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "07:00 AM – 03:00 PM" },
  { day: "Wednesday", hours: "07:00 AM – 03:00 PM" },
  { day: "Thursday", hours: "07:00 AM – 03:00 PM" },
  { day: "Friday", hours: "07:00 AM – 08:00 PM" },
  { day: "Saturday", hours: "07:00 AM – 08:00 PM" },
  { day: "Sunday", hours: "07:00 AM – 02:00 PM" },
];

const MENU_CATEGORIES = [
  {
    title: "Breakfast Favorites",
    icon: <Coffee className="w-5 h-5" />,
    items: [
      { name: "Everything Omelet", description: "Packed with all your favorites - ham, bacon, sausage, and veggies.", price: "$12.99" },
      { name: "Mexican Skillet", description: "Spicy chorizo, peppers, onions, and eggs over crispy hash browns.", price: "$13.49" },
      { name: "Corned Beef Hash Skillet", description: "House-made corned beef hash with two eggs any style.", price: "$12.49" },
      { name: "Breakfast Burrito", description: "Large flour tortilla stuffed with eggs, cheese, and your choice of meat.", price: "$10.99" },
      { name: "Nutella French Toast", description: "Thick-cut brioche stuffed with Nutella and topped with berries.", price: "$11.49" },
      { name: "Oatmeal", description: "Hearty steel-cut oats served with brown sugar and raisins.", price: "$6.99" },
    ]
  },
  {
    title: "Lunch & Dinner",
    icon: <Utensils className="w-5 h-5" />,
    items: [
      { name: "Chicken Fried Steak Combo", description: "A diner classic served with white gravy, mashed potatoes, and corn.", price: "$14.99" },
      { name: "Sunshine Chicken", description: "Grilled chicken breast topped with a citrus glaze and seasonal veggies.", price: "$15.49" },
      { name: "Greek Salad", description: "Fresh greens, feta, olives, and our signature vinaigrette.", price: "$11.99" },
      { name: "Rib Dinners", description: "Slow-cooked, fall-off-the-bone ribs with BBQ sauce.", price: "$18.99" },
      { name: "Hearty Skillets", description: "Various lunch skillets served with a side of toast.", price: "$13.99" },
    ]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
              <Coffee className="w-6 h-6" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight text-brand-dark">Sunshine Cafe</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Menu', 'Hours', 'Location', 'About'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-orange-600 transition-colors uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <a 
              href="tel:+16419393848"
              className="bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-orange-900 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-orange-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {['Menu', 'Hours', 'Location', 'About'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-lg font-medium text-left py-2 border-b border-orange-50"
              >
                {item}
              </button>
            ))}
            <a 
              href="tel:+16419393848"
              className="bg-orange-500 text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (641) 939-3848
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" 
            alt="Cafe Interior" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-orange-500/90 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-lg">
              Eldora's Favorite Diner
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">
              Warm Food, <br />
              <span className="italic text-orange-200">Warmer Welcome.</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-50/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Serving classic American comfort food and hearty breakfast favorites in the heart of Eldora, Iowa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollToSection('menu')}
                className="w-full sm:w-auto bg-white text-brand-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                View Menu
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="w-full sm:w-auto bg-transparent border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Find Us
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Features / Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
              <Star className="w-8 h-8 fill-current" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Local Favorite</h3>
            <p className="text-gray-600">A community staple known for friendly service and a cozy small-town diner atmosphere.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Hearty Portions</h3>
            <p className="text-gray-600">We believe in generous servings at reasonable prices. You won't leave hungry!</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
              <Coffee className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Breakfast All Day</h3>
            <p className="text-gray-600">From Nutella French Toast to Mexican Skillets, we serve breakfast favorites any time.</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#fdfcf8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Menu</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-xl mx-auto">
              Classic American comfort food prepared with fresh ingredients and a lot of love.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {MENU_CATEGORIES.map((category, idx) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-serif font-bold">{category.title}</h3>
                </div>

                <div className="grid gap-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="menu-card group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold group-hover:text-orange-600 transition-colors">{item.name}</h4>
                        <span className="font-serif font-bold text-orange-600">{item.price}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-500 italic mb-8">Plus daily specials, fresh desserts, and the best coffee in town!</p>
            <a 
              href="tel:+16419393848"
              className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all"
            >
              Call to ask about today's specials <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
                alt="Coffee and Breakfast" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-orange-500 p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-4xl font-serif font-bold">100%</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Local Love</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">A Small Town Gem in Eldora</h2>
            <p className="text-lg text-orange-50/80 mb-6 leading-relaxed">
              Sunshine Cafe is more than just a restaurant; it's a gathering place for the Eldora community. Located in the historic county seat of Hardin County, we pride ourselves on maintaining that classic American diner feel.
            </p>
            <p className="text-lg text-orange-50/80 mb-10 leading-relaxed">
              Whether you're stopping in for your morning coffee, a hearty lunch skillet, or a weekend rib dinner, you'll be met with friendly service and a cozy atmosphere that makes you feel right at home.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-orange-400 font-bold mb-2">Atmosphere</h4>
                <p className="text-sm text-orange-50/60">Casual, cozy, and perfect for families or solo dining.</p>
              </div>
              <div>
                <h4 className="text-orange-400 font-bold mb-2">Hospitality</h4>
                <p className="text-sm text-orange-50/60">Community-favored for our welcoming and efficient staff.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hours & Location */}
      <section id="hours" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-orange-50 p-10 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <Clock className="w-6 h-6 text-orange-600" />
                <h3 className="text-3xl font-serif font-bold">Opening Hours</h3>
              </div>
              <div className="space-y-4">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-3 border-b border-orange-100 last:border-0">
                    <span className="font-bold">{h.day}</span>
                    <span className={h.hours === 'Closed' ? 'text-red-500 font-medium' : 'text-gray-600'}>{h.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-gray-500 italic">
                * Reservations recommended during peak breakfast times and weekends.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              id="location"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-6 h-6 text-orange-600" />
                <h3 className="text-3xl font-serif font-bold">Find Us</h3>
              </div>
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">Sunshine Cafe</h4>
                <p className="text-gray-600 text-lg mb-4">
                  1327 12th St, Eldora, Iowa 50627, <br />
                  United States
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Sunshine+Cafe+1327+12th+St+Eldora+Iowa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline"
                >
                  Get Directions <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-2">Contact</h4>
                <a href="tel:+16419393848" className="text-gray-600 text-lg hover:text-orange-600 transition-colors">
                  +1 641-939-3848
                </a>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready for a Delicious Meal?</h2>
          <p className="text-xl text-orange-50 mb-10 opacity-90">
            Join us for breakfast, lunch, or dinner. We can't wait to serve you!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+16419393848"
              className="w-full sm:w-auto bg-brand-dark text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-900 transition-all shadow-xl"
            >
              Call for Takeaway
            </a>
            <button 
              onClick={() => scrollToSection('menu')}
              className="w-full sm:w-auto bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all"
            >
              Browse the Menu
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#fdfcf8] border-t border-orange-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
              <Coffee className="w-5 h-5" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">Sunshine Cafe</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sunshine Cafe Eldora. All rights reserved.
          </p>

          <div className="flex gap-8">
            <button onClick={() => scrollToSection('menu')} className="text-sm text-gray-500 hover:text-orange-600">Menu</button>
            <button onClick={() => scrollToSection('hours')} className="text-sm text-gray-500 hover:text-orange-600">Hours</button>
            <button onClick={() => scrollToSection('location')} className="text-sm text-gray-500 hover:text-orange-600">Location</button>
          </div>
        </div>
      </footer>
    </div>
  );
}