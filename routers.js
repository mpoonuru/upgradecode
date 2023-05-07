import Vue from 'vue'
import Router from 'vue-router'

import store from './store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    //https://router.vuejs.org/guide/advanced/scroll-behavior.html
    if (to.hash) {
      return {selector: to.hash}
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [

    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [

        {
          path: '/registration/set-password/:id',
          name: 'home',
          props: true,
          component: () => import('./views/pages/login/RegisterSetPassword'),
          meta: {
            title: 'Set Password',
            rule: 'all',
            authRequired: false,
          },
        },
        /**
         * Home Route
         */
        {
          path: '/',
          name: 'home',
          component: () => import('./views/home/OrgHomePage'),
          meta: {
            title: 'Home',
            rule: 'all',
            authRequired: false,
          },
        },
        {
          path: '/version',
          name: 'version',
          component: () => import('./views/Version'),
          meta: {
            title: 'Version',
            rule: 'all',
            authRequired: false,
          },
        },
        {
          path: '/user/register',
          name: 'user-register',
          component: () => import('./views/home/OrgHomeRegister'),
          meta: {
            title: 'Register',
            rule: 'all',
            authRequired: false,
          },
        },
        {
          path: '/agb',
          name: 'agb',
          component: () => import('./views/home/AGB'),
          meta: {
            title: 'AGB',
            rule: 'all',
            authRequired: false,
          },
        },
        {
          path: '/terms',
          name: 'terms',
          component: () => import('./views/home/OrgTerms'),
          meta: {
            title: 'Terms',
            rule: 'all',
            authRequired: false,
          },
        },
        {
          path: '/impressum',
          name: 'impressum',
          component: () => import('./views/home/OrgImpressum'),
          meta: {
            title: 'Impressum',
            rule: 'all',
            authRequired: false,
          },
        },
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/pages/login/Login.vue'),
          meta: {
            title: 'Login',
            hasOrg: false,
            rule: 'editor',
          },
        },
        {
          path: '/loading',
          name: 'loading',
          component: () => import('@/views/pages/CheckUser.vue'),
          meta: {
            title: 'Loading',
            hasOrg: false,
            rule: 'editor',
          },
        },
        {
          path: '/pages/comingsoon',
          name: 'page-coming-soon',
          component: () => import('@/views/pages/ComingSoon.vue'),
          meta: {
            title: 'Coming Soon',
            hasOrg: false,
            rule: 'editor',
          },
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue'),
          meta: {
            title: '404 Not Found',
            hasOrg: false,
            rule: 'editor',
          },
        },
        {
          path: '/pages/error-500',
          name: 'page-error-500',
          component: () => import('@/views/pages/Error500.vue'),
          meta: {
            title: 'Error 505',
            hasOrg: false,
            rule: 'editor',
          },
        },
        {
          path: '/pages/not-authorized',
          name: 'page-not-authorized',
          component: () => import('@/views/pages/NotAuthorized.vue'),
          meta: {
            title: 'Not Authorized',
            hasOrg: false,
            rule: 'editor',
          },
        },
        {
          path: '/pages/maintenance',
          name: 'page-maintenance',
          component: () => import('@/views/pages/Maintenance.vue'),
          meta: {
            title: 'Maintenance',
            hasOrg: false,
            rule: 'editor',
          },
        },
        // Invoice
        {
          path: '/new/invoice-credit-note/:invoiceId',
          props: true,
          name: 'new-invoice-credit-note-view',
          component: () => import('./views/pages/superadmin/invoices/ViewInvoiceCredit'),
          meta: {
            title: 'Invoice',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        // Invoice
        {
          path: '/new/invoice-gross/:invoiceId',
          props: true,
          name: 'new-invoice-gross-view',
          component: () => import('./views/pages/superadmin/invoices/ViewInvoiceGross'),
          meta: {
            title: 'Invoice',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/new/invoice/:invoiceId',
          props: true,
          name: 'new-invoice-gross-credit-view',
          component: () => import('./views/pages/superadmin/invoices/ViewInvoiceCG'),
          meta: {
            title: 'Invoice',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/new/invoice-reclamation-combined/:invoiceId',
          props: true,
          name: 'new-invoice-reclamation-combined',
          component: () => import('./views/pages/superadmin/invoices/ViewInvoiceReclamationCG'),
          meta: {
            title: 'Invoice',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/new/invoice-gross-reclamation/:invoiceId',
          props: true,
          name: 'new-invoice-gross-reclamation-view',
          component: () => import('./views/pages/superadmin/invoices/ViewReclamationInvoiceGross'),
          meta: {
            title: 'Invoice',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/new/invoice-reclamation/:invoiceId',
          props: true,
          name: 'new-invoice-reclamation-view',
          component: () => import('./views/pages/superadmin/invoices/ViewInvoiceReclamationCredit'),
          meta: {
            title: 'Invoice',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
      ],
    },
    {
      // =============================================================================
      // MAIN LAYOUT Seller ROUTES
      // =============================================================================
      /**
       * sellers - template1 - 0, template6 - 5
       * seller_template_one - template2 - 1
       * template3_seller - template3 - 2
       * template4_seller - template4 - 3
       * template5_seller - template5 - 4
       */
      path: '',
      component: () => {
        const template = localStorage.getItem('template')
        if (template == 'null' || template == 2) {
          return import('./layouts/template3/Main.vue')
        } if (template == 'null' || template == 3) {
          return import('./layouts/template4/Main.vue')
        } if (template == 'null' || template == 4) {
          return import('./layouts/template5/Main.vue')
        }
        return import('./layouts/main/Main.vue')
      } ,
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        // {
        //   path: '/',
        //   redirect: '/dashboard',
        // },
        /**
         * Dashboard Route
         */
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => {
            const template = localStorage.getItem('template')
            if (template == 'null' || template == 2) {
              return import('./views/pages/dashboard/template3/Dashboard.vue')
            }
            return import('./views/pages/dashboard/Dashboard')
          },
          meta: {
            title: 'Dashboard',
            rule: 'all',
            authRequired: true,
          },
        },
        /**
         * CashCard routes
         */
        {
          path: '/cashcards/',
          name: 'cashcards',
          props: true,
          component: () => {
            const template = localStorage.getItem('template')
            if (template == 'null' || template == 0 || template == 5) {
              return import('./views/pages/sellers/CashCards')
            }
            if (template == 'null' || template == 2) {
              return import('./views/pages/template3_seller/CashCards.vue')
            }
            if (template == 'null' || template == 3) {
              return import('./views/pages/template4_seller/CashCards.vue')
            }
            if (template == 'null' || template == 4) {
              return import('./views/pages/template5_seller/CashCards.vue')
            }
            return import('./views/pages/seller_template_one/CashCards')
          },
          meta: {
            title: 'CashCards',
            role: 'seller,web_support',
            rule: 'product',
            authRequired: true,
          },
        },{
          path: '/callingcards/',
          name: 'callingcards',
          props: true,
          component: () => {
            const template = localStorage.getItem('template')
            if (template == 'null' || template == 0 || template == 5) {
              return import('./views/pages/sellers/CallingCards')
            }
            if (template == 'null' || template == 2) {
              return import('./views/pages/template3_seller/CallingCards.vue')
            }
            if (template == 'null' || template == 3) {
              return import('./views/pages/template4_seller/CallingCards.vue')
            }
            if (template == 'null' || template == 4) {
              return import('./views/pages/template5_seller/CallingCards.vue')
            }
            return import('./views/pages/seller_template_one/CallingCards')
          },
          meta: {
            title: 'Calling Cards',
            role: 'seller,web_support',
            rule: 'product',
            authRequired: true,
          },
        },
        /**
         * GiftCards routes
         */
        {
          path: '/giftcards/',
          name: 'giftcards',
          props: true,
          component: () => {
            const template = localStorage.getItem('template')
            if (template == 'null' || template == 0 || template == 5) {
              return import('./views/pages/sellers/GiftCards')
            }
            if (template == 'null' || template == 2) {
              return import('./views/pages/template3_seller/GiftCards.vue')
            }
            if (template == 'null' || template == 3) {
              return import('./views/pages/template4_seller/GiftCards.vue')
            }
            if (template == 'null' || template == 4) {
              return import('./views/pages/template5_seller/GiftCards.vue')
            }
            return import('./views/pages/seller_template_one/GiftCards')
          },
          meta: {
            title: 'GiftCards',
            role: 'seller,web_support',
            rule: 'product',
            authRequired: true,
          },
        },
        /**
         * InternationalTopUp routes
         */
        {
          path: '/international-topup/',
          name: 'international-topup',
          props: true,
          component: () => {
            const template = localStorage.getItem('template')
            if (template == 'null' || template == 0 || template == 5) {
              return import('./views/pages/sellers/InternationalTopUp')
            }
            if (template == 'null' || template == 2) {
              return import('./views/pages/template3_seller/InternationalTopUp.vue')
            }
            if (template == 'null' || template == 3) {
              return import('./views/pages/template4_seller/InternationalTopUp.vue')
            }
            if (template == 'null' || template == 4) {
              return import('./views/pages/template5_seller/InternationalTopUp.vue')
            }
            return import('./views/pages/seller_template_one/InternationalTopUp')
          },
          meta: {
            title: 'International TopUp',
            role: 'seller,web_support',
            rule: 'international_top_up',
            authRequired: true,
          },
        },
        /**
         * Direct Recharge routes
         */
        {
          path: '/direct-recharge/',
          name: 'direct-recharge',
          props: true,
          component: () => {
            const template = localStorage.getItem('template')
            if (template == 'null' || template == 0 || template == 5) {
              return import('./views/pages/sellers/directrecharge/DirectRecharge')
            }
            if (template == 'null' || template == 2) {
              return import('./views/pages/template3_seller/DirectRecharge.vue')
            }
            if (template == 'null' || template == 3) {
              return import('./views/pages/template4_seller/DirectRecharge.vue')
            }
            if (template == 'null' || template == 4) {
              return import('./views/pages/template5_seller/DirectRecharge.vue')
            }
            return import('./views/pages/seller_template_one/directrecharge/DirectRecharge')
          },
          meta: {
            title: 'Direct Recharge',
            role: 'seller,web_support',
            rule: 'direct_recharge',
            authRequired: true,
          },
        },
        {
          path: '/direct-recharge/history',
          name: 'direct-recharge-history',
          props: true,
          component: () => import('./views/pages/sellers/directrecharge/DirectRechargeHistory'),
          meta: {
            title: 'Direct Recharge History',
            role: 'seller,web_support',
            rule: 'direct_recharge',
            authRequired: true,
          },
        },
        /**
         * FlixBus
         */
        {
          path: '/flixbus',
          name: 'flixbus',
          props: true,
          component: () => {
            const template = localStorage.getItem('template')
            if (template == 'null' || template == 0 || template == 5) {
              return import('./views/pages/sellers/flixbus/FlixBus')
            }
            return import('./views/pages/seller_template_one/flixbus/FlixBus')
          },
          meta: {
            title: 'FlixBus',
            role: 'seller,web_support',
            rule: '',
            authRequired: true,
          },
        },

        /**
         * User Seller routes
         */
        {
          path: '/seller/users/view',
          name: 'seller-users-view',
          component: () => import('./views/pages/sellers/users/ViewUsers'),
          meta: {
            title: 'Users',
            role: 'seller',
            authRequired: true,
          },
        },
        {
          path: '/seller/user/add',
          name: 'seller-user-add',
          component: () => import('./views/pages/sellers/users/AddUser'),
          meta: {
            title: 'Add User',
            role: 'seller',
            authRequired: true,
          },
        },
        {
          path: '/seller/user/edit/:userId',
          name: 'seller-user-edit',
          props: true,
          component: () => import('./views/pages/sellers/users/AddUser'),
          meta: {
            title: 'Edit User',
            role: 'seller',
            authRequired: true,
          },
        },
        /**
         * Seller Reports
         */
        {
          path: '/seller/sales',
          name: 'seller-sales',
          component: () => {
            const template = localStorage.getItem('template')
            if (template == 'null' || template == 0 || template == 5) {
              return import('./views/pages/sellers/reports/SalesReportsView')
            }
            return import('./views/pages/seller_template_one/reports/SalesReportsView')
          },
          meta: {
            title: 'Sales',
            role: 'seller',
            authRequired: true,
          },
        },
        {
          path: '/seller/zreport',
          name: 'seller-zreport',
          component: () => {
            return import('./views/pages/sellers/reports/ZReportView')
          },
          meta: {
            title: 'Z-Report',
            role: 'seller',
            authRequired: true,
          },
        },
        {
          path: '/seller/ledger',
          name: 'seller-ledger',
          component: () => import('./views/pages/sellers/reports/SalesLedgerView'),
          meta: {
            title: 'Sales Ledger',
            role: 'seller',
            authRequired: true,
          },
        },
        {
          path: '/admin/ledger',
          name: 'admin-ledger',
          component: () => import('./views/pages/superadmin/reports/SalesLedgerView'),
          meta: {
            title: 'Sales Ledger',
            role: 'reseller',
            authRequired: true,
          },
        },
        {
          path: '/admin/customer-ledger',
          name: 'admin-customer-ledger',
          component: () => import('./views/pages/superadmin/reports/CustomerSalesLedgerView'),
          meta: {
            title: 'Sales Ledger',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/seller/recharge-summary',
          name: 'recharge-summary-report',
          component: () => {
            const template = localStorage.getItem('template')
            if (template == 'null' || template == 2) {
              return import('./views/pages/template3_seller/reports/RechargeSummaryReportsView')
            } if (template == 'null' || template == 3) {
              return import('./views/pages/template4_seller/reports/RechargeSummaryReportsView')
            } if (template == 'null' || template == 4) {
              return import('./views/pages/template5_seller/reports/RechargeSummaryReportsView')
            }
            return import('./views/pages/sellers/reports/RechargeSummaryReportsView');
          },
          meta: {
            title: 'Recharge Summary',
            role: 'seller',
            authRequired: true,
          },
        },
        {
          path: '/report/product-discounts-list',
          name: 'product-discounts-list',
          component: () => import('./views/pages/superadmin/reports/ProductDiscountList'),
          meta: {
            title: 'Product Discount List',
            role: 'superadmin,reseller',
            authRequired: true,
          },
        },
        {
          path: '/report/recharge-summary',
          name: 'recharge-summary-report',
          component: () => {
            return import('./views/pages/sellers/reports/RechargeSummaryReportsView');
          },
        },

        /**
         * Reclaim Requests
         */
        {
          path: '/seller-reclaim-requests',
          name: 'seller-reclaim-requests',
          component: () => import('./views/pages/reclaim/SellerReclaimRequests'),
          meta: {
            title: 'Reclaim Requests',
            role: 'seller,superadmin,reseller',
            rule: 'reclamation',
            authRequired: true,
          },
        },
        {
          path: '/seller-reclaim/:reclaimId',
          name: 'seller-reclaim-details',
          props: true,
          component: () => import('./views/pages/reclaim/SellerReclaimDetails'),
          meta: {
            title: 'Reclaim Details',
            role: 'seller,superadmin,reseller',
            rule: 'reclamation',
            authRequired: true,
          },
        },

        /**
         * Invoices
         */
        {
          path: '/invoices-all',
          name: 'invoices-all',
          props: true,
          component: () => import('./views/pages/superadmin/invoices/ViewInvoices'),
          meta: {
            title: 'View Invoices',
            role: 'seller,superadmin,reseller',
            rule: 'invoice',
            authRequired: true,
          },
        },
        {
          path: '/invoices-all-reclamation',
          name: 'invoices-all-reclamation',
          props: true,
          component: () => import('./views/pages/superadmin/invoices/ViewReclamationInvoices'),
          meta: {
            title: 'View Reclamation Invoices',
            role: 'seller,superadmin,reseller',
            rule: 'invoice',
            authRequired: true,
          },
        },

        /**
         * Settings
         */
        {
          path: '/settings',
          name: 'settings',
          component: () => import('./views/SupportPage'),
          meta: {
            title: 'Settings',
            rule: 'all',
            authRequired: false,
          },
        },

        /**
         * Hardware
         */
        {
          path: '/hardware',
          name: 'hardware',
          component: () => import('./views/pages/superadmin/hardware/AdminHardwareCategories'),
          meta: {
            title: 'Hardware',
            role: 'reseller',
            authRequired: true,
          },
        },
        {
          path: '/hardware/category/:categoryId',
          name: 'hardware-category',
          component: () => import('./views/pages/superadmin/hardware/AdminHardwareCatProducts'),
          props: true,
          meta: {
            title: 'Hardware Products',
            role: 'reseller',
            authRequired: true,
          },
        },
        {
          path: '/admin/hardware/sales',
          name: 'admin-hardware-sales',
          component: () => import('./views/pages/superadmin/hardware/AdminHardwareSalesReport'),
          props: true,
          meta: {
            title: 'Hardware Sales Report',
            role: 'reseller',
            authRequired: true,
          },
        },
        {
          path: '/hardware/categories',
          name: 'hardware-categories',
          component: () => import('./views/pages/sellers/hardware/HardwareCategories'),
          props: true,
          meta: {
            title: 'Hardware Categories',
            role: 'seller',
            authRequired: true,
          },
        }, {
          path: '/report/hardware/sales',
          name: 'hardware-sales',
          component: () => import('./views/pages/sellers/hardware/HardwareSalesReport'),
          props: true,
          meta: {
            title: 'Hardware Sales Report',
            role: 'seller,reseller',
            authRequired: true,
          },
        },
        {
          path: '/hardware/:categoryId',
          name: 'hardware-category-products',
          component: () => import('./views/pages/sellers/hardware/HardwareProducts'),
          props: true,
          meta: {
            title: 'Hardware Products',
            role: 'seller',
            authRequired: true,
          },
        },
      ],
    },

    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        // {
        //   path: '/',
        //   redirect: '/dashboard',
        // },
        /**
         * Dashboard Route
         */
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('./views/pages/dashboard/Dashboard'),
          meta: {
            title: 'Dashboard',
            rule: 'all',
            authRequired: true,
          },
        },
        // Download Sales report file
        {
          path: '/download/:downloadId',
          props: true,
          name: 'download-file',
          component: () => import('./views/pages/DownloadFilePage'),
          meta: {
            title: 'Download',
            role: 'seller,reseller,superadmin',
            authRequired: true,
          },
        },

        {
          path: '/login-requests',
          name: 'login-requests',
          component: () => import('./views/pages/loginrequests/LoginRequests'),
          meta: {
            title: 'Login Requests',
            rule: 'all',
            authRequired: true,
          },
        },
        {
          path: '/reclaim-requests',
          name: 'reclaim-requests',
          component: () => import('./views/pages/reclaim/ReclaimRequests'),
          meta: {
            title: 'Reclaim Requests',
            role: 'superadmin',
            authRequired: true,
          },
        },

        {
          path: '/reclaim-request/:reclaimId',
          name: 'reclaim-request',
          props: true,
          component: () => import('./views/pages/reclaim/ReclaimDetails'),
          meta: {
            title: 'Reclaim Details',
            role: 'superadmin',
            authRequired: true,
          },
        },

        {
          path: '/reseller-reclaim-requests',
          name: 'reseller-reclaim-requests',
          component: () => import('./views/pages/reclaim/ReSellerReclaimRequests'),
          meta: {
            title: 'Reclaim Requests',
            role: 'seller,superadmin,reseller',
            rule: 'reclamation',
            authRequired: true,
          },
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('./views/SupportPage'),
          meta: {
            title: 'Settings',
            rule: 'all',
            authRequired: false,
          },
        },
        /**
         * Product Route
         */
        {
          path: '/products/view',
          name: 'products-view',
          component: () => import('./views/pages/superadmin/products/ViewProducts'),
          meta: {
            title: 'Products',
            rule: 'product',
            authRequired: true,
          },
        },
        {
          path: '/products/add',
          name: 'products-add',
          component: () => import('./views/pages/superadmin/products/AddProducts'),
          meta: {
            title: 'Add Products',
            rule: 'product',
            authRequired: true,
          },
        },
        {
          path: '/products/view/:productId',
          name: 'products-view-detail',
          props: true,
          component: () => import('./views/pages/superadmin/products/EditProducts'),
          meta: {
            title: 'Product Details',
            rule: 'product',
            authRequired: true,
          },
        },
        /**
         * Supplier routes
         */
        {
          path: '/suppliers/view',
          name: 'suppliers-view',
          component: () => import('./views/pages/superadmin/suppliers/ViewSuppliers'),
          meta: {
            title: 'Suppliers',
            rule: 'supplier',
            authRequired: true,
          },
        },
        {
          path: '/supplier/add',
          name: 'supplier-add',
          component: () => import('./views/pages/superadmin/suppliers/AddSupplier'),
          meta: {
            title: 'Add Supplier',
            rule: 'supplier',
            authRequired: true,
          },
        },
        {
          path: '/supplier/edit/:supplierId',
          name: 'supplier-edit',
          props: true,
          component: () => import('./views/pages/superadmin/suppliers/AddSupplier'),
          meta: {
            title: 'Edit Supplier',
            rule: 'supplier',
            authRequired: true,
          },
        },
        /**
         * Inventory routes
         */
        {
          path: '/inventory/view',
          name: 'inventory-view',
          component: () => import('./views/pages/superadmin/inventory/StockInventoryView'),
          // component: () => import('./views/pages/superadmin/reports/StockReport'),
          meta: {
            title: 'Inventory',
            rule: 'inventory',
            authRequired: true,
          },
        },
        {
          path: '/inventory/details/:configId',
          name: 'inventory-details',
          props: true,
          // component: () => import('./views/pages/superadmin/inventory/ViewInventory'),
          component: () => import('./views/pages/superadmin/inventory/InventoryDetail'),
          meta: {
            title: 'Inventory Details',
            rule: 'inventory',
            authRequired: true,
          },
        },
        {
          path: '/inventory/add',
          name: 'inventory-add',
          component: () => import('./views/pages/superadmin/inventory/AddInventory'),
          meta: {
            title: 'Add Inventory',
            rule: 'inventory',
            authRequired: true,
          },
        },
        {
          path: '/inventory/approve',
          name: 'inventory-approve',
          props: true,
          component: () => import('./views/pages/superadmin/inventory/InventoryUploadStep3'),
          meta: {
            title: 'Add Inventory',
            rule: 'inventory',
            authRequired: true,
          },
        },

        /**
         * Customer routes
         */

        {
          path: '/customers/view',
          name: 'customers-view',
          component: () => import('./views/pages/superadmin/customer/ViewCustomersOld'),
          meta: {
            title: 'Customers',
            rule: 'customers',
            authRequired: true,
          },
        },
        {
          path: '/stopped-customers/view',
          name: 'stopped-customer-view',
          component: () => import('./views/pages/superadmin/customer/StoppedCustomersView'),
          meta: {
            title: 'Stopped Customers',
            rule: 'customers',
            authRequired: true,
          },
        },
        {
          path: '/customers/terminals',
          name: 'customers-terminals',
          component: () => import('./views/pages/superadmin/customer/EPayTerminalsList'),
          meta: {
            title: 'EPay Terminals',
            role: 'superadmin',
            authRequired: true,
          },
        },
        {
          path: '/customers/registrations',
          name: 'customers-registrations',
          component: () => import('./views/pages/superadmin/customer/ViewCustomerRegistrations'),
          meta: {
            title: 'Registrations',
            rule: 'customers',
            authRequired: true,
          },
        },
        {
          path: '/customer/add',
          name: 'customer-add',
          component: () => import('./views/pages/superadmin/customer/AddCustomer'),
          meta: {
            title: 'Add Customer',
            rule: 'customers',
            authRequired: true,
          },
        },
        {
          path: '/customer/details/:customerId',
          name: 'customer-details',
          props: true,
          component: () => import('./views/pages/superadmin/customer/DetailCustomer'),
          meta: {
            title: 'Customer Details',
            rule: 'customers',
            authRequired: true,
          },
        },
        {
          path: '/customer/devices/:customerId',
          name: 'customer-devices',
          props: true,
          component: () => import('./views/pages/superadmin/devices/customer/CustomerDevices'),
          meta: {
            title: 'Customer Devices',
            rule: 'devices',
            authRequired: true,
          },
        },
        {
          path: '/customer/edit/:customerId',
          name: 'customer-edit',
          props: true,
          component: () => import('./views/pages/superadmin/customer/EditCustomer'),
          meta: {
            title: 'Edit Customer',
            rule: 'customers',
            authRequired: true,
          },
        },
        {
          path: '/customer/:customerId/pad',
          name: 'customer-pad',
          props: true,
          component: () => import('./views/pages/superadmin/customer/ProductAssignmentDiscounts'),
          meta: {
            title: 'Product Assignment Discounts',
            rule: 'pad',
            authRequired: true,
          },
        },
        {
          path: '/customers/pad',
          name: 'customers-pad',
          props: true,
          component: () => import('./views/pages/superadmin/customer/PAD'),
          meta: {
            title: 'Product Assignment Discounts',
            rule: 'pad',
            authRequired: true,
          },
        },
        {
          path: '/customer/:customerId/credit/add',
          name: 'customer-credit-add',
          props: true,
          component: () => import('./views/pages/superadmin/credits/AddCredits'),
          meta: {
            title: 'Customer Management',
            rule: 'credit_and_balance',
            authRequired: true,
          },
        },
        {
          path: '/customer/credit/add',
          name: 'credit-add',
          props: true,
          component: () => import('./views/pages/superadmin/credits/AddCredits'),
          meta: {
            title: 'Customer Management',
            rule: 'credit_and_balance',
            authRequired: true,
          },
        },
        {
          path: '/customer/credit/multi',
          name: 'credit-add-multi',
          props: true,
          component: () => import('./views/pages/superadmin/credits/MultiAddCredit'),
          meta: {
            title: 'Customer Management',
            rule: 'credit_and_balance',
            authRequired: true,
          },
        },
        {
          path: '/customer/credit/history',
          name: 'credit-history',
          props: true,
          component: () => import('./views/pages/superadmin/credits/ViewCreditHistory'),
          meta: {
            title: 'Customer Management',
            rule: 'credit_and_balance',
            authRequired: true,
          },
        },
        {
          path: '/customer/:customerId/credit/auto',
          name: 'customer-credit-auto',
          props: true,
          component: () => import('./views/pages/superadmin/credits/AutoCredit'),
          meta: {
            title: 'Customer Management Auto Credit',
            role: 'superadmin,reseller',
            rule: 'credit_and_balance',
            authRequired: true,
          },
        },
        {
          path: '/customer/credit/auto',
          name: 'credit-auto',
          props: true,
          component: () => import('./views/pages/superadmin/credits/AutoCredit'),
          meta: {
            title: 'Customer Management Auto Credit',
            role: 'superadmin,reseller',
            authRequired: true,
          },
        },
        {
          path: '/customer/:customerId/dynamic/discount',
          name: 'customer-dynamic-discount',
          props: true,
          component: () => import('./views/pages/superadmin/customer/AddDiscount'),
          meta: {
            title: 'Add Discount',
            rule: 'credit',
            authRequired: true,
          },
        },
        {
          path: '/dynamic-products-discounts',
          name: 'dynamic-products-discounts',
          props: true,
          component: () => import('./views/pages/superadmin/inventory/DynamicProductsDiscounts'),
          meta: {
            title: 'Update Dynamic Discount',
            role: 'superadmin',
            authRequired: true,
          },
        },
        /**
         * Banking Module
         */
        {
          path: '/banking-upload',
          name: 'banking-upload',
          props: true,
          component: () => import('./views/pages/superadmin/banking/BankingUploadFile'),
          meta: {
            title: 'Import CSV',
            role: 'reseller',
            authRequired: true,
          },
        },
        {
          path: '/banking-list',
          name: 'banking-list',
          props: true,
          component: () => import('./views/pages/superadmin/banking/BankingListRecords'),
          meta: {
            title: 'Banking',
            role: 'reseller',
            authRequired: true,
          },
        },
        {
          path: '/banking-customers',
          name: 'banking-customers',
          props: true,
          component: () => import('./views/pages/superadmin/banking/BankingMappedCustomers'),
          meta: {
            title: 'Mapped Customers',
            role: 'reseller',
            authRequired: true,
          },
        },
        {
          path: '/banking-deleted',
          name: 'banking-deleted',
          props: true,
          component: () => import('./views/pages/superadmin/banking/DeletedBankRecordsList'),
          meta: {
            title: 'Deleted Records',
            role: 'reseller',
            authRequired: true,
          },
        },
        /**
         * User routes
         */
        {
          path: '/users/view',
          name: 'users-view',
          component: () => import('./views/pages/superadmin/users/ViewUsers'),
          meta: {
            title: 'Users',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/user/add',
          name: 'user-add',
          component: () => import('./views/pages/superadmin/users/AddUser'),
          meta: {
            title: 'Add User',
            rule: 'users',
            authRequired: true,
          },
        },
        {
          path: '/user/edit/:userId',
          name: 'user-edit',
          props: true,
          component: () => import('./views/pages/superadmin/users/AddUser'),
          meta: {
            title: 'Edit User',
            rule: 'users',
            authRequired: true,
          },
        },
        {
          path: '/user/assign/:userId',
          name: 'user-assign',
          props: true,
          component: () => import('./views/pages/superadmin/users/StaffAssign'),
          meta: {
            title: 'Assign Staff',
            rule: 'users',
            authRequired: true,
          },
        },
        {
          path: '/user/assign-history',
          name: 'user-assign-history',
          props: true,
          component: () => import('./views/pages/superadmin/users/StaffAssignHistory'),
          meta: {
            title: 'Assign History',
            rule: 'users',
            authRequired: true,
          },
        },

        /**
         * Dynamic Products
         */
        {
          path: '/dynamic-products/',
          name: 'dynamic-products',
          props: true,
          component: () => import('./views/pages/superadmin/dynamic_products/DynamicProducts'),
          meta: {
            title: 'Dynamic Products',
            rule: 'has_dynamic_products',
            authRequired: true,
          },
        },
        /**
         * Superadmin Giftcards
         */
        {
          path: '/admin/giftcards/',
          name: 'admin-giftcards',
          props: true,
          component: () => import('./views/pages/superadmin/giftcards/ViewGiftCards'),
          meta: {
            title: 'GiftCards',
            role: 'superadmin,reseller',
            authRequired: true,
          },
        },
        {
          path: '/admin/giftcards/search',
          name: 'admin-giftcards-search',
          props: true,
          component: () => import('./views/pages/superadmin/giftcards/GiftCardBatchSearch'),
          meta: {
            title: 'GiftCards Search',
            role: 'superadmin,reseller',
            authRequired: true,
          },
        },
        {
          path: '/admin/giftcard/:card',
          name: 'admin-giftcard',
          props: true,
          component: () => import('./views/pages/superadmin/giftcards/ViewGiftCardDetails'),
          meta: {
            title: 'GiftCards',
            role: 'superadmin,reseller',
            authRequired: true,
          },
        },
        {
          path: '/admin/giftcard/edit/:card',
          name: 'admin-giftcard-edit',
          props: true,
          component: () => import('./views/pages/superadmin/giftcards/UpdateGiftCard'),
          meta: {
            title: 'GiftCards',
            role: 'superadmin,reseller',
            authRequired: true,
          },
        },
        {
          path: '/admin/giftcards/add',
          name: 'admin-giftcards-add',
          props: true,
          component: () => import('./views/pages/superadmin/giftcards/AddGiftCard'),
          meta: {
            title: 'Add GiftCard',
            role: 'superadmin,reseller',
            authRequired: true,
          },
        },
        /**
         * Discount Slabs routes
         */
        {
          path: '/discount-slabs/',
          name: 'discount-slabs',
          props: true,
          component: () => import('./views/pages/superadmin/discountslabs/ViewDiscountSlabs'),
          meta: {
            title: 'Discount Slabs',
            rule: 'discountslab',
            authRequired: true,
          },
        },
        {
          path: '/product-discount-slabs/:discountSlabId',
          name: 'product-discount-slabs',
          props: true,
          component: () => import('./views/pages/superadmin/discountslabs/ProductDiscountSlabs'),
          meta: {
            title: 'Product Discounts',
            rule: 'discountslab',
            authRequired: true,
          },
        },
        {
          path: '/discount-slabs/add',
          name: 'discount-slabs-add',
          props: true,
          component: () => import('./views/pages/superadmin/discountslabs/AddDiscountSlab'),
          meta: {
            title: 'Add Discount Slab',
            rule: 'discountslab',
            authRequired: true,
          },
        },
        /**
         * Reports Routes
         */
        {
          path: '/report/dynamic-products-log',
          name: 'dynamic-products-log',
          component: () => import('./views/pages/superadmin/reports/DynamicProductsLogView'),
          meta: {
            title: 'Dynamic Products Log',
            role: 'superadmin',
            authRequired: true,
          },
        },
        {
          path: '/report/inventory-search',
          name: 'inventory-search',
          component: () => import('./views/pages/superadmin/inventory/InventoryPinBatchSearch'),
          meta: {
            title: 'Inventory Search',
            role: 'superadmin',
            authRequired: true,
          },
        },
        {
          path: '/reports-sales',
          name: 'reports-sales',
          component: () => import('./views/pages/superadmin/reports/SalesReportsView'),
          meta: {
            title: 'Sales Reports',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/reports-sales-new',
          name: 'reports-sales-new',
          component: () => import('./views/pages/superadmin/reports/SalesReport2'),
          meta: {
            title: 'Sales Reports New',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/report-sales-summary',
          name: 'report-sales-summary',
          component: () => import('./views/pages/superadmin/reports/SalesSummaryReport'),
          meta: {
            title: 'Sales Summary Report',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/reports-sales-comparison',
          name: 'reports-sales-comparison',
          component: () => import('./views/pages/superadmin/reports/SalesComparisionReport'),
          meta: {
            title: 'Sales Comparison Report',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/reseller-reports-sales',
          name: 'reseller-reports-sales',
          component: () => import('./views/pages/superadmin/reports/SalesReportsView'),
          meta: {
            title: 'Sales Reports',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/reports-stock',
          name: 'reports-stock',
          component: () => import('./views/pages/superadmin/reports/StockReport'),
          meta: {
            title: 'Stock Report',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/stock/details/:configId',
          name: 'stock-details',
          props: true,
          // component: () => import('./views/pages/superadmin/inventory/ViewInventory'),
          component: () => import('./views/pages/superadmin/reports/stock/StockInventoryDetail'),
          meta: {
            title: 'Stock Details',
            rule: 'inventory',
            authRequired: true,
          },
        },
        {
          path: '/stock/details/:configId/:batch',
          name: 'stock-details-sold-pins',
          props: true,
          // component: () => import('./views/pages/superadmin/inventory/ViewInventory'),
          component: () => import('./views/pages/superadmin/reports/stock/SoldPinsListPage'),
          meta: {
            title: 'Stock Details',
            rule: 'inventory',
            authRequired: true,
          },
        },
        {
          path: '/reports-inventory',
          name: 'reports-inventory',
          component: () => import('./views/pages/superadmin/reports/InventoryReport'),
          meta: {
            title: 'Inventory Report',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        {
          path: '/invoice/:customerId',
          props: true,
          name: 'invoice-customer',
          component: () => import('./views/pages/superadmin/invoices/ViewInvoices'),
          meta: {
            title: 'Invoice',
            role: 'reseller,superadmin',
            authRequired: true,
          },
        },
        /**
         * Deivces Endpoints
         */

        {
          path: '/devices',
          name: 'devices',
          component: () => import('./views/pages/superadmin/devices/ViewDevices'),
          meta: {
            title: 'Devices',
            role: 'superadmin',
            authRequired: true,
          },
        },
        {
          path: '/assign/devices/',
          name: 'assign-devices',
          props: true,
          component: () => import('./views/pages/superadmin/devices/customer/CustomerDevices'),
          meta: {
            title: 'Assign Devices',
            role: 'reseller',
            authRequired: true,
          },
        },
        {
          path: '/user/devices',
          name: 'user-devices',
          component: () => import('./views/pages/superadmin/devices/ViewResellerDevices'),
          meta: {
            title: 'User Devices',
            role: 'reseller',
            authRequired: true,
          },
        },
        {
          path: '/device/add',
          name: 'device-add',
          component: () => import('./views/pages/superadmin/devices/AddDevice'),
          meta: {
            title: 'Add Device',
            role: 'superadmin',
            authRequired: true,
          },
        },
        {
          path: '/device/edit/:data',
          name: 'device-edit',
          props: true,
          component: () => import('./views/pages/superadmin/devices/AddDevice'),
          meta: {
            title: 'Edit Device',
            role: 'superadmin',
            authRequired: true,
          },
        },

        /**
         * Invoice Endpoints
         */
        {
          path: '/invoices-all',
          name: 'invoices-all',
          props: true,
          component: () => import('./views/pages/superadmin/invoices/ViewInvoices'),
          meta: {
            title: 'View Invoice',
            role: 'seller,superadmin,reseller',
            rule: 'invoice',
            authRequired: true,
          },
        },
        {
          path: '/my-invoices-all',
          name: 'my-invoices-all',
          props: true,
          component: () => import('./views/pages/superadmin/invoices/MyInvoices'),
          meta: {
            title: 'My Invoice',
            role: 'reseller',
            authRequired: true,
          },
        },
        {
          path: '/my-reclamation-invoices-all',
          name: 'my-reclamation-invoices-all',
          props: true,
          component: () => import('./views/pages/superadmin/invoices/MyReclamationInvoices'),
          meta: {
            title: 'My Invoice',
            role: 'reseller',
            authRequired: true,
          },
        },
        {
          path: '/invoice-generate',
          name: 'invoice-generate',
          props: true,
          component: () => import('./views/pages/superadmin/invoices/GenerateInvoice'),
          meta: {
            title: 'Generate Invoice',
            role: 'superadmin,reseller',
            authRequired: true,
          },
        },
        {
          path: 'invoice-generate-reclamation',
          name: 'invoice-generate-reclamation',
          props: true,
          component: () => import('./views/pages/superadmin/invoices/GenerateReclamationInvoice'),
          meta: {
            title: 'Generate Reclamation Invoice',
            role: 'superadmin,reseller',
            authRequired: true,
          },
        },

        /**
         * Calling Cards Admin
         */
        {
          path: '/inventory/pool',
          name: 'inventory-pool',
          props: true,
          component: () => import('./views/pages/superadmin/inventory/ViewCallingCardPool'),
          meta: {
            title: 'Inventory Pools',
            role: 'superadmin',
            authRequired: true,
          },
        },
        {
          path: '/inventory/pool/pad/:poolId',
          name: 'inventory-pool-pad',
          props: true,
          component: () => import('./views/pages/superadmin/calling_cards/PoolPAD'),
          meta: {
            title: 'Inventory Pools',
            role: 'superadmin',
            authRequired: true,
          },
        },
        {
          path: '/inventory/pool/add',
          name: 'inventory-pool-add',
          props: true,
          component: () => import('./views/pages/superadmin/inventory/AddInventoryPool'),
          meta: {
            title: 'Add Inventory',
            role: 'superadmin',
            authRequired: true,
          },
        },
      ],
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404',
    },
  ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

router.beforeEach((to, from, next) => {
  console.log("window", window)
  console.log("to", to)
  console.log("from", from)
  try {
    if(window.location.host.indexOf('e-aufladen.') > -1) {
      if (to.path == '/' && from.path == '/') {
        next({path: '/login'});
        return;
      }
    }
  } catch (e) {
  }



  let tips = document.getElementsByClassName("vs-tooltip") || [];
  for (let i = 0; i < tips.length; i++) {
    tips[i].remove()
  }
  let sideBars = document.getElementsByClassName("custom-card-sidebar") || [];
  for (let i = 0; i < sideBars.length; i++) {
    sideBars[i].remove()
  }

  // let sideBars = document.getElementsByClassName("vs-content-sidebar") || [];
  // for (let i = 0; i < sideBars.length; i++) {
  //   sideBars[i].remove()
  // }

  if (to.path != '/' && to.path != '/login') {
    if (to.query.to) {
      router.push({path: to.query.to})
    }
  }
  /*
   * SEO Title
   */
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title)
  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags)
  const previousNearestWithMeta = from.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags)
  try {
    const data = localStorage.getItem('home')
    const homeData = JSON.parse(data)
    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = `${homeData.organisation_name} | ${nearestWithTitle.meta.title}`
  } catch (err) {
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (nearestWithMeta) {
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map((tagDef) => {
      const tag = document.createElement('meta')

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key])
      })

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '')

      return tag
    })
      // Add the meta tags to the document head.
      .forEach((tag) => document.head.appendChild(tag))
  }

  if (to.meta.authRequired) {
    if (!(store.state.auth.isUserLoggedIn())) {
      router.push({path: '/login', query: {to: to.path}})
      return next()
    }
  }

  // alert(to.path === '/login' && (store.state.auth.isUserLoggedIn() != null))

  if (to.path === '/login' && (store.state.auth.isUserLoggedIn())) {
    router.push({path: '/loading'})
    return next()
  }

  if (!to.meta.authRequired) return next()


  let hasPermission = false

  if (to.meta.role) {
    if (to.meta.role.indexOf('seller') != -1) {
      if (store.state.AppActiveUser.account_role === 2) {
        hasPermission = true
      }
    }

    if (to.meta.role.indexOf('superadmin') != -1) {
      if (store.state.AppActiveUser.account_role === 0) {
        hasPermission = true
      }
    }
    if (to.meta.role.indexOf('reseller') != -1) {
      if (store.state.AppActiveUser.account_role === 1) {
        hasPermission = true
      }
    }
  }
  if (to.meta.rule === 'all') {
    hasPermission = true
  }

  switch (to.meta.rule) {
    case 'invoice':
      hasPermission = store.state.AppActiveUser.has_invoice === 1
      break
    case 'reports':
      hasPermission = store.state.AppActiveUser.has_reports === 1
      break
    case 'has_dynamic_products':
      hasPermission = store.state.AppActiveUser.has_dynamic_products === 1
      break
    case 'credit_and_balance':
      hasPermission = store.state.AppActiveUser.has_credit_and_balance === 1
      break
    case 'direct_recharge':
      hasPermission = store.state.AppActiveUser.has_direct_recharge === 1
      break
    case 'international_top_up':
      hasPermission = store.state.AppActiveUser.has_dt_one === 1
      break
    case 'flixbus':
      hasPermission = store.state.AppActiveUser.has_flixbus === 1
      break
    case 'transaction':
      hasPermission = store.state.AppActiveUser.has_transaction === 1
      break
    case 'cash_card':
      hasPermission = store.state.AppActiveUser.has_cash_card === 1
      break
    case 'gift_card':
      hasPermission = store.state.AppActiveUser.has_gift_card === 1
      break
    case 'reclamation':
      hasPermission = store.state.AppActiveUser.has_reclamation === 1
      break
    case 'product':
      hasPermission = store.state.AppActiveUser.has_product === 1
      break
    case 'supplier':
      hasPermission = store.state.AppActiveUser.has_supplier === 1
      break
    case 'inventory':
      hasPermission = store.state.AppActiveUser.has_inventory === 1
      break
    case 'customers':
      hasPermission = store.state.AppActiveUser.has_customers === 1 || store.state.AppActiveUser.has_customers_read === 1
      break
    case 'pad':
      hasPermission = store.state.AppActiveUser.has_assign_product === 1
      break
    case 'discountslab':
      hasPermission = store.state.AppActiveUser.has_discount_slab === 1
      break
    case 'credit':
      hasPermission = store.state.AppActiveUser.has_credit === 1
      break
    case 'devices':
      hasPermission = store.state.AppActiveUser.has_device === 1
      break
  }

  if (to.meta.rule === 'users') {
    if ((store.state.AppActiveUser.account_role === 0 || store.state.AppActiveUser.account_role === 1) && store.state.AppActiveUser.internal_role === 0) {
      hasPermission = true
    }
  }
  if (!to.meta.authRequired) {
    hasPermission = true
  }
  if (to.meta.role) {
    if (to.meta.role.indexOf('web_support') != -1) {
      const hasWebSupport = localStorage.getItem('enable_web_view') == 1
      if (!hasWebSupport) {
        hasPermission = false
      }
    }
  }
  if (hasPermission) return next()
  router.push({path: '/pages/not-authorized'})

  return next()


  // if (
  //     to.path === "/pages/login" ||
  //     to.path === "/pages/forgot-password" ||
  //     to.path === "/pages/error-404" ||
  //     to.path === "/pages/error-500" ||
  //     to.path === "/pages/register" ||
  //     to.path === "/callback" ||
  //     to.path === "/pages/comingsoon" ||
  //     (auth.isAuthenticated() || firebaseCurrentUser)
  // ) {
  //     return next();
  // }
})

export default router
