import { Navigation } from "@/components/Navigation";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus, Flame, X } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

// Temporary replacement for createPageUrl
const createPageUrl = (page: string) => `/${page.toLowerCase()}`;

// Mocked menu data
const MOCK_MENU_ITEMS = [
  {
    id: 1,
    name: "Jollof Rice",
    category: "Rice & Grains",
    price: 500,
    available: true,
    description: "Delicious Nigerian Jollof Rice",
    image_url: "https://via.placeholder.com/400",
    spicy_level: "Medium",
  },
  {
    id: 2,
    name: "Egusi Soup",
    category: "Soups & Stews",
    price: 600,
    available: true,
    description: "Rich melon seed soup",
    image_url: "https://via.placeholder.com/400",
    spicy_level: "Hot",
  },
  {
    id: 3,
    name: "Suya",
    category: "Proteins",
    price: 700,
    available: true,
    description: "Spicy grilled meat skewers",
    image_url: "https://via.placeholder.com/400",
    spicy_level: "Very Hot",
  },
];

export default function Menu() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);

  const categories = ["All", "Soups & Stews", "Rice & Grains", "Proteins", "Sides", "Drinks", "Desserts"];

  const filteredItems =
    selectedCategory === "All"
      ? MOCK_MENU_ITEMS.filter(item => item.available)
      : MOCK_MENU_ITEMS.filter(item => item.category === selectedCategory && item.available);

  const addToCart = item => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (itemId, change) => {
    setCart(cart
      .map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
      .filter(item => item.quantity > 0));
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getSpicyIcon = level => {
    const count = { "Not Spicy": 0, Mild: 1, Medium: 2, Hot: 3, "Very Hot": 4 }[level] || 0;
    return Array(count).fill(0).map((_, i) => (
      <Flame key={i} className="w-3 h-3 fill-red-500 text-red-500" />
    ));
  };

  return (
    
    <div className="min-h-screen py-12 pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600">Discover the flavors of Nigeria</p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              {item.image_url && (
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                  {item.spicy_level && item.spicy_level !== "Not Spicy" && (
                    <div className="flex gap-0.5">{getSpicyIcon(item.spicy_level)}</div>
                  )}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">₽{item.price}</span>
                  <Button
                    onClick={() => addToCart(item)}
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Cart Button - Mobile */}
        {cart.length > 0 && (
          <button
            onClick={() => setShowCart(true)}
            className="md:hidden fixed bottom-6 right-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full p-4 shadow-2xl z-40 flex items-center gap-3 hover:shadow-3xl transition-all"
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="font-bold text-lg">{getTotalItems()}</span>
            <span className="font-bold">₽{getTotalPrice()}</span>
          </button>
        )}

        {/* Cart Modal - Mobile */}
        {cart.length > 0 && showCart && (
          <>
            <div
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowCart(false)}
            />
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto z-50 animate-slide-up">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> Your Cart ({getTotalItems()})
                </h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-3 mb-4">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center bg-orange-50 p-3 rounded-xl">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">₽{item.price} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-orange-600">₽{getTotalPrice()}</span>
                </div>
                <Button
                  onClick={() => {
                    setShowCart(false);
                    navigate(createPageUrl("Checkout"), { state: { cart } });
                  }}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-6 text-lg rounded-xl"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
