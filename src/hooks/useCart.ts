import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Book } from '../data/content';

export interface CartItem {
  book: Book;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];
  wishlist: Book[];
  isOpen: boolean;
  addToCart: (book: Book, qty?: number) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (book: Book) => void;
  isInWishlist: (bookId: string) => boolean;
  setIsOpen: (isOpen: boolean) => void;
  getCartTotal: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      isOpen: false,
      addToCart: (book, qty = 1) => {
        const currentCart = get().cart;
        const existingItem = currentCart.find((item) => item.book.id === book.id);
        if (existingItem) {
          set({
            cart: currentCart.map((item) =>
              item.book.id === book.id
                ? { ...item, quantity: item.quantity + qty }
                : item
            ),
          });
        } else {
          set({ cart: [...currentCart, { book, quantity: qty }] });
        }
        set({ isOpen: true }); // Open the slide-out drawer on add
      },
      removeFromCart: (bookId) => {
        set({ cart: get().cart.filter((item) => item.book.id !== bookId) });
      },
      updateQuantity: (bookId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(bookId);
          return;
        }
        set({
          cart: get().cart.map((item) =>
            item.book.id === bookId ? { ...item, quantity } : item
          ),
        });
      },
      clearCart: () => set({ cart: [] }),
      toggleWishlist: (book) => {
        const currentWishlist = get().wishlist;
        const exists = currentWishlist.some((item) => item.id === book.id);
        if (exists) {
          set({ wishlist: currentWishlist.filter((item) => item.id !== book.id) });
        } else {
          set({ wishlist: [...currentWishlist, book] });
        }
      },
      isInWishlist: (bookId) => {
        return get().wishlist.some((item) => item.id === bookId);
      },
      setIsOpen: (isOpen) => set({ isOpen }),
      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + item.book.price * item.quantity, 0);
      },
    }),
    {
      name: 'jon-roseman-cart-store',
    }
  )
);
