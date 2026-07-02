import { useMemo, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AccountPage from './pages/AccountPage'
import AuthPage from './pages/AuthPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import HomePage from './pages/HomePage'

const defaultProfile = {
  fullName: 'Guest Customer',
  email: '',
  phone: '',
}

function App() {
  const [cartItems, setCartItems] = useState([])
  const [currentPage, setCurrentPage] = useState('home')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userProfile, setUserProfile] = useState(defaultProfile)
  const [orders, setOrders] = useState([])
  const [contactStatus, setContactStatus] = useState('')
  const [authStatus, setAuthStatus] = useState('')
  const [checkoutStatus, setCheckoutStatus] = useState('')
  const [accountStatus, setAccountStatus] = useState('')
  const [postAuthPage, setPostAuthPage] = useState('home')
  const [billingAddress, setBillingAddress] = useState({
    fullName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  })

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  const setPage = (page, afterAuthTarget = 'home') => {
    if (page === 'login' || page === 'signup') {
      setPostAuthPage(afterAuthTarget)
    }

    setAuthStatus('')
    setAccountStatus('')
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id)

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...items, { ...product, quantity: 1 }]
    })
    setPage('cart')
  }

  const updateCartQuantity = (productId, delta) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + delta } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId) => {
    setCartItems((items) => items.filter((item) => item.id !== productId))
  }

  const beginCheckout = () => {
    if (cartItems.length === 0) {
      return
    }

    if (!isAuthenticated) {
      setPage('login', 'checkout')
      return
    }

    setPage('checkout')
  }

  const handleAuthSubmit = (event, mode) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const email = String(form.get('email') || '').trim()
    const fullName = String(form.get('fullName') || '').trim()
    const phone = String(form.get('phone') || '').trim()

    setIsAuthenticated(true)
    setAuthStatus(mode === 'signup' ? `Account created for ${fullName || email}.` : `Welcome back, ${email}.`)
    setUserProfile((prev) => ({
      fullName: fullName || prev.fullName,
      email: email || prev.email,
      phone: phone || prev.phone,
    }))
    setBillingAddress((prev) => ({
      ...prev,
      email: prev.email || email,
      fullName: prev.fullName || fullName,
      phone: prev.phone || phone,
    }))
    setPage(postAuthPage)
  }

  const handleAddressChange = (event) => {
    const { name, value } = event.target
    setBillingAddress((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckoutSubmit = (event) => {
    event.preventDefault()
    if (cartItems.length === 0) {
      setCheckoutStatus('Add products to your cart before placing an order.')
      setPage('cart')
      return
    }

    const orderId = `RC-${Math.floor(100000 + Math.random() * 900000)}`
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      status: 'Processing',
      total: cartTotal,
      items: cartItems.map((item) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
    }

    setOrders((currentOrders) => [newOrder, ...currentOrders])
    setCheckoutStatus(`Order ${orderId} placed. Confirmation sent to ${billingAddress.email}.`)
    setCartItems([])
    setPage('account')
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    setContactStatus('Thanks. Your message is ready for the sales team.')
    event.currentTarget.reset()
  }

  const handleProfileUpdate = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)

    setUserProfile({
      fullName: String(form.get('fullName') || '').trim(),
      email: String(form.get('email') || '').trim(),
      phone: String(form.get('phone') || '').trim(),
    })
    setBillingAddress((prev) => ({
      ...prev,
      fullName: String(form.get('fullName') || '').trim(),
      email: String(form.get('email') || '').trim(),
      phone: String(form.get('phone') || '').trim(),
    }))
    setAccountStatus('Profile details updated.')
  }

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header cartCount={cartCount} isAuthenticated={isAuthenticated} currentPage={currentPage} setPage={setPage} />

      {currentPage === 'home' && (
        <HomePage
          addToCart={addToCart}
          contactStatus={contactStatus}
          handleContactSubmit={handleContactSubmit}
          setPage={setPage}
        />
      )}

      {currentPage === 'cart' && (
        <CartPage
          cartItems={cartItems}
          cartTotal={cartTotal}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
          beginCheckout={beginCheckout}
          setPage={setPage}
        />
      )}

      {(currentPage === 'login' || currentPage === 'signup') && (
        <AuthPage
          mode={currentPage}
          postAuthPage={postAuthPage}
          setPage={setPage}
          handleAuthSubmit={handleAuthSubmit}
          authStatus={authStatus}
        />
      )}

      {currentPage === 'account' && (
        <AccountPage
          userProfile={userProfile}
          billingAddress={billingAddress}
          orders={orders}
          cartCount={cartCount}
          accountStatus={accountStatus}
          setPage={setPage}
          handleProfileUpdate={handleProfileUpdate}
        />
      )}

      {currentPage === 'checkout' && (
        <CheckoutPage
          cartItems={cartItems}
          cartTotal={cartTotal}
          billingAddress={billingAddress}
          handleAddressChange={handleAddressChange}
          handleCheckoutSubmit={handleCheckoutSubmit}
          checkoutStatus={checkoutStatus}
          setPage={setPage}
        />
      )}

      <Footer isAuthenticated={isAuthenticated} setPage={setPage} />
    </div>
  )
}

export default App
