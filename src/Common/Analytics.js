import { firebase } from '@react-native-firebase/analytics'

export const set_screen_name = (screen_name) => {
  firebase.analytics().setCurrentScreen(screen_name, screen_name)
}

export const set_user_id = (user_id) => {
  firebase.analytics().setUserId(user_id.toString())
}

export const add_payment_info = (type) => {
  // when a user adds billing information
  firebase.analytics().logEvent('add_payment_info', { type })
}
export const add_to_cart = (quantity, item_category, item_name, item_id, item_location_id, value, price, currency) => {
  // when a user adds items to cart
  firebase.analytics().logEvent('add_to_cart', {
    quantity, item_category, item_name, item_id, item_location_id, value, price, currency,
  })
}
export const remove_from_cart = (quantity, item_category, item_name, item_id, item_location_id, value, price, currency) => {
  // when a user removes items from cart
  firebase.analytics().logEvent('remove_from_cart', {
    quantity, item_category, item_name, item_id, item_location_id, value, price, currency,
  })
}
export const add_to_wishlist = (quantity, item_category, item_name, item_id, item_location_id, value, price, currency) => {
  // when a user adds an item to wishlist
  firebase.analytics().logEvent('add_to_wishlist', {
    quantity, item_category, item_name, item_id, item_location_id, value, price, currency,
  })
}

export const remove_from_wishlist = (quantity, item_category, item_name, item_id, item_location_id, value, price, currency) => {
  // when a user adds an item to wishlist
  firebase.analytics().logEvent('remove_from_wishlist', {
    quantity, item_category, item_name, item_id, item_location_id, value, price, currency,
  })
}
export const begin_checkout = (coupon, currency, value) => {
  // when a user begins checkout
  firebase.analytics().logEvent('begin_checkout', { coupon, currency, value })
}
export const ecommerce_purchase = (coupon, currency, value, tax, shipping, transaction_id) => {
  // when a user completes a purchase
  firebase.analytics().logEvent('ecommerce_purchase', {
    coupon, currency, value, tax, shipping, transaction_id,
  })
}
export const generate_lead = (value, currency) => {
  // when a user submits a form or request for information
  firebase.analytics().logEvent('generate_lead', { value, currency })
}
export const purchase_refund = (quantity, value, currency, transaction_id) => {
  // when a refund is issued
  firebase.analytics().logEvent('purchase_refund', {
    quantity, value, currency, transaction_id,
  })
}
export const view_item = (item_id, item_location_id) => {
  // when a user sees one specific item/offering
  firebase.analytics().logEvent('view_item', { item_id, item_location_id })
}
export const view_item_list = (item_category) => {
  // when a user sees a list of items/offerings
  firebase.analytics().logEvent('view_item', { item_category })
}
export const view_search_results = (search_term) => {
  // when a user sees search results
  firebase.analytics().logEvent('view_item', { search_term })
}
export const login = (method) => {
  // when a user logs in.
  firebase.analytics().logEvent('login', { method })
}
export const present_offer = (item_id, item_name, item_category) => {
  // when a user is presented with an offer
  firebase.analytics().logEvent('present_offer', { item_id, item_name, item_category })
}
export const search = (search_term) => {
  // when a user searches in the app.
  firebase.analytics().logEvent('search', { search_term })
}
export const select_content = (content_type, item_id) => {
  // when a user has selected content in an app
  firebase.analytics().logEvent('select_content', { content_type, item_id })
}
export const share = (content_type, item_location_id, item_id) => {
  // when a user has shared content in an app
  firebase.analytics().logEvent('share', { content_type, item_location_id, item_id })
}
export const sign_up = (method) => {
  // when a user has signed up. Allows you to see which methods of sign-up (e.g., Google account, email address, etc.) are most popular
  firebase.analytics().logEvent('sign_up', { method })
}
export const tutorial_begin = () => {
  // when a user begins a tutorial No parameters
  firebase.analytics().logEvent('tutorial_begin')
}
export const tutorial_complete = () => {
  // when a user completes a tutorial No parameters
  firebase.analytics().logEvent('tutorial_complete')
}
