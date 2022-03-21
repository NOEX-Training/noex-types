/**
 * @description
 * IAP response object.
 */
export interface IAPPurchase {
  createdDate: string;
  data: {
    /**
     * @description
     * Android purchase token.
     */
    androidToken: string;
    app: string;
    /**
     * @description
     * Only if isSubscription is true
     */
    autoResumeDate: string;
    convertedCurrency: string;
    convertedPrice: number;
    /**
     * @description
     * Only if isRefunded is true.
     */
    convertedRefundAmount: number;
    country: string;
    currency: string;
    /**
     * @description
     * Only if isSubscription is true
     */
    expirationDate: string;
    id: string;
    isFamilyShare: boolean;
    isRefunded: boolean;
    isSandbox: boolean;
    isSubscription: boolean;
    /**
     * @description
     * Only if isSubscription is true
     */
    isSubscriptionActive: boolean;
    /**
     * @description
     * Only if isSubscription is true
     */
    isSubscriptionGracePeriod: boolean;
    /**
     * @description
     * Only if isSubscription is true
     */
    isSubscriptionPaused: boolean;
    /**
     * @description
     * Only if isSubscription is true
     */
    isSubscriptionRenewable: boolean;
    /**
     * @description
     * Only if isSubscription is true
     */
    isSubscriptionRetryPeriod: boolean;
    /**
     * @description
     * Only if isSubscription is true
     */
    isTrialConversion: boolean;
    /**
     * @description
     * Only if isSubscription is true
     */
    linkedPurchase: string;
    listing: string;
    /**
     * @description
     * Only if isSubscription is true
     */
    nextPurchase: string;
    orderId: string;
    /**
     * @description
     * Only if isSubscription is true
     */
    originalPruchase: string;
    platform: 'ios' | 'android';
    price: number;
    product: string;
    /**
     * @description
     * Only if the product has a group.
     */
    productGroupName: string;
    productSku: string;
    productType:
      | 'consumable'
      | 'non_consumable'
      | 'renewable_subscription'
      | 'subscription';
    pruchaseDate: string;
    quantity: number;
    reciept: string;
    /**
     * @description
     * Only if isRefunded is true.
     */
    refundDate: string;
    /**
     * @description
     * Only if isRefunded is true.
     * iOS only: issue
     * Android only: remorse, not_received, defective, accidental_purchase, fraud, friendly_fraud, chargeback
     */
    refundReaseon:
      | 'subscription_replaced'
      | 'other'
      | 'issue'
      | 'remorse'
      | 'not_received'
      | 'defective'
      | 'accidental_purchase'
      | 'fraud'
      | 'friendly_fraud'
      | 'chargeback';
    /**
     * @description
     * Only if isRefunded is true.
     */
    refundAmount: number;
    store: string;
    storeSegmentIndex: number;
    /**
     * @description
     * Only if isSubscription is true
     */
    subscriptionCancelReason: string;
    /**
     * @description
     * Only if isSubscription is true
     */
    subscriptionPeriodType: string;
    /**
     * @description
     * Only if isSubscription is true
     * Only when the transaction has been created because of a subscription replace
     */
    subscriptionProrationMode:
      | 'immediate_with_time_proration'
      | 'immediate_and_charge_prorated_price'
      | 'immediate_without_proration'
      | 'deferred';
    /**
     * @description
     * Only if isSubscription is true
     */
    subscriptionRenewalProduct: string;
    /**
     * @description
     * Only if isSubscription is true
     */
    subscriptionRenewalProductSku: string;
    /**
     * @description
     * Only if isSubscription is true
     */
    subscriptionState: 'active' | 'grace_period' | 'retry_period' | 'paused';
    tags: Map<string, string>;
    user: string;
    userId: string;
    /**
     * @description
     * Only if the mode allowing an user to have multiple user ids is enabled
     */
    userIds: string[];
  };
  id: string;
  type:
    | 'purchase'
    | 'refund'
    | 'user_id_update'
    | 'subscription_renewal'
    | 'subscription_renewal_retry'
    | 'subscription_grace_period_expire'
    | 'subscription_product_change'
    | 'subscription_replace'
    | 'subscription_cancel'
    | 'subscription_uncancel'
    | 'subscription_expire'
    | 'subscription_pause'
    | 'subscription_pause_enabled'
    | 'subscription_pause_disabled';
  version: string;
}
