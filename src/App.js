import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/media.css";
import "./assets/css/style.css";

import Header from "./common/header/Header";
import "./assets/all-pannel-css/css/vendors.css";
import "./assets/all-pannel-css/css/stylesheets.css";
import "./assets/all-pannel-css/css/aiz-core.css";
import "./assets/all-pannel-css/css/custom-style.css";

// import "./Admin-pannel/Components/crmNew/assets/styles/main.css";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home";
import Footer from "./common/footer/Footer";
import { useState } from "react";
import DashboardRightSectionAdmin from "./Admin-pannel/Pages/dashboardRightSection";
import DashboardAdminPage from "./Admin-pannel/Pages/dashboardPage";
import AddNewProductsPage from "./Admin-pannel/Pages/addnewProductsPage";
import SellerProductsPage from "./Admin-pannel/Pages/sellerProducts";
import BrandPageAdmin from "./Admin-pannel/Pages/brandAdmin";
import AttributeAdminPage from "./Admin-pannel/Pages/attributeAdminPage";
import CategoriesPageAdmin from "./Admin-pannel/Pages/categoriesPageAdmin";
import PosConfigurationPage from "./Admin-pannel/Pages/posConfigurationPage";
import AllProductsPage from "./Admin-pannel/Pages/all-productsPage";
import ProductsReviewPage from "./Admin-pannel/Pages/productsReviewPage";
import ColorsPage from "./Admin-pannel/Pages/colors";
import AddNewWholesaleProductsPage from "./Admin-pannel/Pages/addNewWholsaleProducts";
import AllWholsaleProductsPage from "./Admin-pannel/Pages/allWholsaleProducts";
import AllOrdersPage from "./Admin-pannel/Pages/allOrders/Index";
import OrdersDetailsPage from "./Admin-pannel/Pages/OrderDetails/Index";
import InHouseOrderPage from "./Admin-pannel/Pages/inhouseOrder/Index";
import SellerOrdersPage from "./Admin-pannel/Pages/sellerOrders/Index";
import PickUpPointOrderPage from "./Admin-pannel/Pages/pickUpPointOrder/Index";
import CustomerListPage from "./Admin-pannel/Pages/customerList/Index";
import AllSellerPage from "./Admin-pannel/Pages/allSeller/Index";
import InHouseProductsSalePage from "./Admin-pannel/Pages/inHouseProductsSale";
import SellerProductsSalePage from "./Admin-pannel/Pages/sellerproductsSalePage";
import ProductsStockPage from "./Admin-pannel/Pages/productsStockPage";
import ProductWhislistPage from "./Admin-pannel/Pages/productWishlistPage";
import UserSearchesPage from "./Admin-pannel/Pages/userSearchesPage";
import ComissionHistoryPage from "./Admin-pannel/Pages/comissionHistoryPage";
import WalletRechargeHistoryPage from "./Admin-pannel/Pages/walletRechargeHistory";
import PayoutsPage from "./Admin-pannel/Pages/payout/Index";
import PayoutRequestPage from "./Admin-pannel/Pages/payoutRequest/Index";
import PaymentShowPage from "./Admin-pannel/Pages/payoutRequest/paymentShow/Index";
import SellerCommissionPage from "./Admin-pannel/Pages/sellerCommission/Index";
import SellerPackagePage from "./Admin-pannel/Pages/sellerPackage/Index";
import CreatePackagePage from "./Admin-pannel/Pages/sellerPackage/createPackage/Index";
import FlashDealsPage from "./Admin-pannel/Pages/flashDealsPage";
import FlashDealsInformationPage from "./Admin-pannel/Pages/flashDealsInformation";
import NewsLetterPage from "./Admin-pannel/Pages/newsLetter";
import BulkSMSPage from "./Admin-pannel/Pages/bulkSMS";
import SubscribersPage from "./Admin-pannel/Pages/subscribersPage";
import UpdateInfo from "./Admin-pannel/common/UpdateInfo";
import VerificationFormPage from "./Admin-pannel/Pages/varification-form/Index";
import SellerBannerPage from "./Admin-pannel/Pages/sellerBanner/Index";
import UploadedFilePages from "./Admin-pannel/Pages/uploadedFile/Index";
import AffiliatePage from "./Admin-pannel/Pages/affliated/Index";
import CouponPage from "./Admin-pannel/Pages/couponPage";
import CouponInformationAddingPage from "./Admin-pannel/Pages/couponInformationAdding";
import TicketPage from "./Admin-pannel/Pages/ticketPage";
import SupportTicketDetailPage from "./Admin-pannel/Pages/supportTicketDetailPage";
import ProductsConversationPage from "./Admin-pannel/Pages/productsConversation";
import ProductsQuerriesPage from "./Admin-pannel/Pages/productsQuerries";
import AfiliatedConfigurationPage from "./Admin-pannel/Pages/affiliatedConfiguration/Index";
import AffiliateUserPage from "./Admin-pannel/Pages/affiliateUser/Index";
import AffiliateUserDetailsPage from "./Admin-pannel/Pages/affiliateUserDetails/AffiliateUserDetails";
import UploadCreate from "./Admin-pannel/Components/uploadedFile/uploadCreate/UploadCreate";
import AffiliateWithdrowPage from "./Admin-pannel/Pages/affiliateWithdrowRequest/Index";
import AffliateLogsPage from "./Admin-pannel/Pages/affliateLogs/Index";
import OfflineWalletRechargePage from "./Admin-pannel/Pages/offlineWalletRecharge/Index";
import OfflineSellerPackagePaymentRequestPage from "./Admin-pannel/Pages/offlineSellerPackage/Index";
import RefundRequestPage from "./Admin-pannel/Pages/refund-request-page";
import ApprovedRefundsPage from "./Admin-pannel/Pages/approved-RefundsPage";
import RejectedRefundsPage from "./Admin-pannel/Pages/rejected-refunds-page";
import DigitalProductsPage from "./Admin-pannel/Pages/digital-products-page";
import BulkImportPage from "./Admin-pannel/Pages/bulkImport-page";
import NewDigitalProducts from "./Admin-pannel/Components/digitalProducts/new-digital-products/NewDigitalProducts";
import RefundConfigurationPage from "./Admin-pannel/Pages/refund-configurationPage";
import AllPostPage from "./Admin-pannel/Pages/all-post-page";
import AddNewPost from "./Admin-pannel/Components/all-post/add-new-post/AddNewPost";
import BlogCategoriesPage from "./Admin-pannel/Pages/blogCategoriesPage";
import AddCategories from "./Admin-pannel/Components/blogCategories/addCategories/AddCategories";
import ShareRewardPointsPage from "./Admin-pannel/Pages/ShareRewardPointsPage";
import RefferalUsersPage from "./Admin-pannel/Pages/refferalUsers/Index";
import ManualPaymentMethordPage from "./Admin-pannel/Pages/manualPaymentMethord/Index";
import ManualPaymentMethordCreate from "./Admin-pannel/Components/manualPaymentMethord/ManualPaymentMethordCreate";
import ManualPaymentMethordInformation from "./Admin-pannel/Components/manualPaymentMethord/ManualPaymentMethordInformation";
import OtpConfigurationPage from "./Admin-pannel/Pages/otpConfigurationPage";
// import SmsTemplatesPage from "./Admin-pannel/Pages/smsTemplatesPage";
import SetOtpCredentialPage from "./Admin-pannel/Pages/setOtpCredentialPage";
import ClubPointConfigurationPage from "./Admin-pannel/Pages/clubPointConfiguration/Index";
import UserPointPage from "./Admin-pannel/Pages/userPonts/Index";
import UsrPointsDetails from "./Admin-pannel/Components/userPoint/UserPointDetails";
import AfricanPgConfigurationPage from "./Admin-pannel/Pages/africanPgConfigurationPage";
import PaymentMethodPage from "./Admin-pannel/Pages/paymentMethodPage";
import AfricanPgCredentialPage from "./Admin-pannel/Pages/africanPgCredentialPage";
import HeaderPage from "./Admin-pannel/Pages/websiteSetup/headerPage";
import WebsitePagesPage from "./Admin-pannel/Pages/websiteSetup/wbsitePagesPage";
import AllPages from "./Admin-pannel/Components/websiteSetup/websitePage/AllPages";
import AddNewPage from "./Admin-pannel/Pages/websiteSetup/wbsitePagesPage/AddNewPage";
import FooterPage from "./Admin-pannel/Pages/websiteSetup/footerPage";
import AppearancesPage from "./Admin-pannel/Pages/websiteSetup/appearancesPage";
import GeneralSettingPage from "./Admin-pannel/Pages/setup&Configuration/generalSettingPage";
import FeaturesActivationPage from "./Admin-pannel/Pages/setup&Configuration/featuresActivationPage";
import LikeRewardPointsPage from "./Admin-pannel/Pages/likeRewardPointPage";
import AllStaffsPage from "./Admin-pannel/Pages/allStaffsPage";
import StaffPermissionPage from "./Admin-pannel/Pages/staffPermissionsPage";
import StaffInformation from "./Admin-pannel/Components/allStaffs/staffInformation/StaffInformation";
import RoleInformation from "./Admin-pannel/Components/staffPermissionRole/RoleInformation";
import LanguagesPage from "./Admin-pannel/Pages/setup&Configuration/languagePage";
import AddNewLanguagePage from "./Admin-pannel/Pages/addnewLanguagePage";
import LanguageTranslationPage from "./Admin-pannel/Pages/languageTranslationPage";
import AppTranslationPage from "./Admin-pannel/Pages/appTranslationPage";
import LanguageEditPage from "./Admin-pannel/Pages/languageEditPage";
import CurrencyPage from "./Admin-pannel/Pages/setup&Configuration/currencyPage";
import SystemUpdatePage from "./Admin-pannel/Pages/systemUpdatePage";
import ServerStatusPage from "./Admin-pannel/Pages/serverStatusPage";
import PaymentsMethodPage from "./Admin-pannel/Pages/setup&Configuration/paymentsMethod";
import OrderConfigurationPage from "./Admin-pannel/Pages/setup&Configuration/orderConfigurationPage";
import FileSystemCacheConfigurationPage from "./Admin-pannel/Pages/setup&Configuration/fileSystem&CacheConfiguration";
import SocialMediaLoginPage from "./Admin-pannel/Pages/setup&Configuration/socialMediaLoginPage";
import PickupPointsPage from "./Admin-pannel/Pages/setup&Configuration/pickupPointsPage";
import AddnewPickupPoint from "./Admin-pannel/Components/setup&Configuration/pickupPoints/addNewPickupPoint/AddnewPickupPoint";
import SmtpSettingsPage from "./Admin-pannel/Pages/setup&Configuration/smtpSettingPage";
import FacebookChatPage from "./Admin-pannel/Pages/setup&Configuration/facebook/facebookCahtPage";
import FacebookCommentPage from "./Admin-pannel/Pages/setup&Configuration/facebook/facebookCommentPage";
import AnalyticalPage from "./Admin-pannel/Pages/setup&Configuration/google/analyticalToolsPage";
import GoogleRecaptchaPage from "./Admin-pannel/Pages/setup&Configuration/google/googleRecaptchaPage";
import GoogleMapPage from "./Admin-pannel/Pages/setup&Configuration/google/googlemapPage";
import GoogleFirebasePage from "./Admin-pannel/Pages/setup&Configuration/google/googleFirebasePage";
import ShippingConfigurationPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingConfigurationPage";
import ShippingCountriesPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingCountriesPage";
import ShippingStatePage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingStatesPage";
import ShippingCitiesPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingCitiesPage";
import ShippingZonesPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingZonesPage";
import ShippingCarrierPage from "./Admin-pannel/Pages/setup&Configuration/shipping/shippingCarrierPage";
import AddnewCategories from "./Admin-pannel/Components/categories/addnewCategories/AddnewCategories";
import EditCategories from "./Admin-pannel/Components/categories/editCategories/EditCategories";
import SizePage from "./Admin-pannel/Pages/sizePage";
import EditBrand from "./Admin-pannel/Components/brandsComponents/EditBrand";
import EditSize from "./Admin-pannel/Components/size/editSize/EditSize";
import AddNewCurrency from "./Admin-pannel/Components/setup&Configuration/currency/addNewCurrency/AddNewCurrency";
import EditCurrency from "./Admin-pannel/Components/setup&Configuration/currency/editCurrency/EditCurrency";
import EditCoupon from "./Admin-pannel/Components/couponInformation/editCoupon/EditCoupon";
import EditSupportTicket from "./Admin-pannel/Components/supportTicketDesk/EditSupportTicket";
import EditAllBlogsPost from "./Admin-pannel/Components/all-post/EditAllBlogsPost";
import EditCustomer from "./Admin-pannel/Components/customerList/EditCustomer";
import EditAttribute from "./Admin-pannel/Components/attributesComponents/EditAttribute";
import EditBlogCategory from "./Admin-pannel/Components/blogCategories/addCategories/EditBlogCategory";
import CustomerShippingAddress from "./Admin-pannel/Components/customerList/customerShippingAddress/CustomerShippingAddress";
import EditSellerBanner from "./Admin-pannel/Components/sellerBanner/EditSellerBanner";
import CustomerShippingAddList from "./Admin-pannel/Components/customerList/customerShippingAddList/CustomerShippingAddList";
import CustomerShippingAdressDetail from "./Admin-pannel/Components/customerList/customerShippingAddress/CustomerShippingAdressDetail";
import EditColor from "./Admin-pannel/Components/colors/EditColor";
import EditFlashDeal from "./Admin-pannel/Components/flashDeals/EditFlashDeal";

// junaid import
import SellerAddEditForm from "./Admin-pannel/Pages/allSeller/SellerAddEditForm";
import SellerDetail from "./Admin-pannel/Pages/allSeller/SellerDetail";
// import SmsTemplatesPage from "./Admin-pannel/Pages/smsTemplatesPage";
import SmsList from "./Admin-pannel/Components/smsTemplates/SmsList";
import SmsForm from "./Admin-pannel/Components/smsTemplates/SmsForm";
import SmsTemplatesPage from "./Admin-pannel/Pages/smsTemplatesPage";
import EditProducts from "./Admin-pannel/Components/all-products/EditProducts";
import EditPickUpPoint from "./Admin-pannel/Components/setup&Configuration/pickupPoints/EditPickUpPoint";
import EditRole from "./Admin-pannel/Components/allStaffs/allRoles/EditRole";
import AddRole from "./Admin-pannel/Components/allStaffs/allRoles/AddRole";
import EditStaff from "./Admin-pannel/Components/allStaffs/EditStaff";
import SetProductPointPage from "./Admin-pannel/Pages/setProductPoint";
import EditAllPointsTable from "./Admin-pannel/Components/clubPoints/setAllPointsTable/EditAllPointsTable";
import EditUserPoint from "./Admin-pannel/Components/userPoint/EditUserPoint";
import ListPurchasePage from "./Admin-pannel/Pages/listPurchasePage";
import AddPurchaseListPage from "./Admin-pannel/Pages/addPurChaseListPage";
import AddsellerProductPage from "./Admin-pannel/Pages/addSellerProductPage";
import OrderByStatus from "./pages/orderByStatus/OrderByStatus";
import OrderByPickupPoints from "./pages/orderByPickups/OrderByPickupPoints";
import LoginSection from "./loginPage/LoginAdmin";
import SellerAllOrder from "./Admin-pannel/Components/allOrders/SellerAllOrder";
import Profile from "./Admin-pannel/Pages/Profile/Profile";
import AddComboProduct from "./Admin-pannel/Pages/addComboProduct/Index";
import StockReport from "./Admin-pannel/Pages/reportStock/StockReport";
import SalesReport from "./Admin-pannel/Pages/reportStock/SalesReport";
import ListComboProdust from "./Admin-pannel/Pages/addComboProduct/ListComboProdust";
import BrandRequest from "./Admin-pannel/Pages/BrandRequest/BrandRequest";
import SellerBrnadList from "./Admin-pannel/Pages/BrandListRequest/SellerBrnadList";
import AddSellerBrnad from "./Admin-pannel/Pages/BrandListRequest/AddSellerBrnad";

import RegisterReport from "./Admin-pannel/Pages/reportStock/registerReport";
import ProductsQuantityAlerts from "./Admin-pannel/Pages/reportStock/productsQuantityAlerts";
import ProductsReport from "./Admin-pannel/Pages/reportStock/productsReport";
import AdjustmentsReport from "./Admin-pannel/Pages/reportStock/adjustmentsReport";
import CategoriesReport from "./Admin-pannel/Pages/reportStock/categoriesReport";
import BrandsReport from "./Admin-pannel/Pages/reportStock/brandsReport";
import Dailysales from "./Admin-pannel/Pages/reportStock/dailysales";
import MonthlySales from "./Admin-pannel/Pages/reportStock/monthlySales";
import PaymentsReport from "./Admin-pannel/Pages/reportStock/paymentsReport";
import TaxReport from "./Admin-pannel/Pages/reportStock/taxReport";
import DailyPurchase from "./Admin-pannel/Pages/reportStock/dailyPurchase";
import MonthlyPurchase from "./Admin-pannel/Pages/reportStock/monthlyPurchase";
import PurchasesReport from "./Admin-pannel/Pages/reportStock/purchasesReport";
import ExpensesReport from "./Admin-pannel/Pages/reportStock/expensesReport";
import CustomerReport from "./Admin-pannel/Pages/reportStock/customerReport";
import SuppliersReport from "./Admin-pannel/Pages/reportStock/suppliersReport";
import StaffsReport from "./Admin-pannel/Pages/reportStock/staffsReport";
import ProfitLossReport from "./Admin-pannel/Pages/reportStock/profitLossReport";
import MostViewedProducts from "./Admin-pannel/Pages/reportStock/mostViewedProducts";
import LoginDeviceHistory from "./Admin-pannel/Pages/reportStock/loginDeviceHistory";
import POSSales from "./Admin-pannel/Pages/sales/posSales";
import ReportedProducts from "./Admin-pannel/Pages/reportStock/reportedProducts";
import RequestedBrands from "./Admin-pannel/Pages/reportStock/requestedBrands";
import AllReviewsRatings from "./Admin-pannel/Pages/reportStock/allReviewsRatings";
import SizeChart from "./Admin-pannel/Pages/reportStock/sizeChart";
import SalesTaxReport from "./Admin-pannel/Pages/reportStock/salesTaxReport";
import SalesEntry from "./Admin-pannel/Pages/salesModuls/SalesEntry";
import ProductDamage from "./Admin-pannel/Pages/productDamageList/ProductDamage";
import MaterialReorders from "./Admin-pannel/Pages/material-Re-Order-List/MaterialReorders";
import DamageProEntry from "./Admin-pannel/Pages/productDamageList/DamageProEntry";
import ProductTransferEntry from "./Admin-pannel/Pages/product-transfer/ProductTransferEntry";
import ProductTransferList from "./Admin-pannel/Pages/product-transfer/ProductTransferList";
import AddNewBanner from "./Admin-pannel/Pages/Banner/AddNewBanner";
import ListBanner from "./Admin-pannel/Pages/Banner/ListBanner";
import BulkInventry from "./Admin-pannel/Pages/bulkInventry/BulkInventry";
import TrackingOrderPage from "./Admin-pannel/Pages/trackingOrder/Index";
import AssignOrder from "./Admin-pannel/Pages/assign_order/AssignOrder";
import AssighOrderStatus from "./Admin-pannel/Pages/assighStatusOrder/AssighOrderStatus";
import PickupProfile from "./Admin-pannel/Pages/pickupProfile/PickupProfile";
import AddPopups from "./Admin-pannel/Pages/add_popup/AddPopups";
import ListPopups from "./Admin-pannel/Pages/add_popup/ListPopups";

import SystemSettingsPage from "./Admin-pannel/Pages/settings/systemSettings/Index";
import AddPrinterPage from "./Admin-pannel/Pages/addPrinter/Index";
import ListPopUpPage from "./Admin-pannel/Pages/listPopUp/Index";
import AddPopUp from "./Admin-pannel/Components/listPopUp/addPopup/AddPopUp";
import EmailTempletePage from "./Admin-pannel/Pages/settings/systemSettings/emailTemplete/Index";
import OfficialSalePage from "./Admin-pannel/Pages/settings/officialSale/Index";
import PodListPage from "./Admin-pannel/Pages/settings/podList/Index";
import BookingListPage from "./Admin-pannel/Pages/booking/BookingList/BookingList";
import BookingEntryPage from "./Admin-pannel/Pages/booking/bookingEntry/Index";
import ManiListPage from "./Admin-pannel/Pages/booking/menifestList/Index";
import ManifestPage from "./Admin-pannel/Pages/booking/manifest/Index";
import DeliveryRunListPage from "./Admin-pannel/Pages/booking/deliveryRunList/Index";
import DeliveryRunSheetPage from "./Admin-pannel/Pages/booking/deliveryRunSheet/Index";
import AllCancelOrders from "./Admin-pannel/Pages/allCancelOrder/AllCancelOrders";
import AffilliateUserVerification from "./Admin-pannel/Components/affliateUser/AffilliateUserVerification";
import Add_quotation from "./Admin-pannel/Pages/quotation/Add_quotation";
import ListQuatation from "./Admin-pannel/Pages/quotation/ListQuatation";
import EtgAddMember from "./Admin-pannel/Pages/etgmembers/EtgAddMember";
import ListEtgMember from "./Admin-pannel/Pages/etgmembers/ListEtgMember";
import AllReviewsProducts from "./Admin-pannel/Pages/allReviews/AllReviewsProducts";
import AllDeliveryBoys from "./Admin-pannel/Pages/deliveryBoy/allDeliveryBoys/AllDeliveryBoys";
import AddNewDeliveryBoy from "./Admin-pannel/Pages/deliveryBoy/addNewDeliveryBoys/AddNewDeliveryBoy";
import DeliveryBoyPaymentList from "./Admin-pannel/Pages/deliveryBoy/deliveryBoyPaymentHistory/DeliveryBoyPaymentHistory";
import DeliveryBoyPaymentHistory from "./Admin-pannel/Pages/deliveryBoy/deliveryBoyPaymentHistory/DeliveryBoyPaymentHistory";
import DeliveryCollectionList from "./Admin-pannel/Pages/deliveryBoy/deliveryCollectionList/DeliveryCollectionList";
import DeliveryBoyCancelRequest from "./Admin-pannel/Pages/deliveryBoy/deliveryBoyCancelRequest/DeliveryBoyCancelRequest";
import DeliveryBoyConfiguration from "./Admin-pannel/Pages/deliveryBoy/deliveryBoyConfiguration/DeliveryBoyConfiguration";
import DeliveryBoyStatus from "./Admin-pannel/Pages/deliveryBoy/deliveryBoyStatus/DeliveryBoyStatus";
import ListParchaseList from "./Admin-pannel/Components/sellerPackage/ListParchaseList";
import Seller_packages_purchase_list from "./Admin-pannel/Pages/seller_packages_purchase_list/Seller_packages_purchase_list";
import SocialMediaCredentail from "./Admin-pannel/Components/socialMediaSystem/socialMediaCredential/SocialMediaCredentail";
import AddPos from "./Admin-pannel/Pages/posSystem/addPosPage";
import InputPurchase from "./Admin-pannel/Pages/taxRepo/InputPurchase";
import OutputPurchase from "./Admin-pannel/Pages/taxRepo/OutputPurchase";
import AddStock from "./Admin-pannel/Pages/transfersStock/AddStock";
import ListStock from "./Admin-pannel/Pages/transfersStock/ListStock";
import IndexPages from "./Admin-pannel/Pages/product-attributes/IndexPages";
import PrintBarCode from "./Admin-pannel/Pages/printBarcode/PrintBarCode";
import AddAdjustments from "./Admin-pannel/Pages/adjustmentStock/AddAjustments";
import ListAdjustment from "./Admin-pannel/Pages/adjustmentStock/ListAdjustment";
import AddAssetCategories from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/AddAssetCategories";
import AssetCategorey from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetCategorey";
import AssetCategoryDetails from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetCategoryDetails";
import AssetAddCategory from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetAddCategory";
import AssetSubCatecories from "./Admin-pannel/Components/assetCategoriesMaster/assetSubCategories/AssetSubCatecories";
import AssetComments from "./Admin-pannel/Components/assetCategoriesMaster/assetComment/AssetComments";
import AssetStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/AssetStatus";
import SubDepartMent from "./Admin-pannel/Components/manageDepartmentmaster/subDepartment/SubDepartMent";
import Department from "./Admin-pannel/Components/manageDepartmentmaster/department/Department";
import Desigination from "./Admin-pannel/Components/manageDepartmentmaster/desgination/Desigination";
import EditAssetCategory from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/editAssetsCategory/EditAssetCategory";
import AddSubCategories from "./Admin-pannel/Components/assetCategoriesMaster/assetSubCategories/addAssetSubCategories/AddSubCategories";
import EditAssetsSubCategory from "./Admin-pannel/Components/assetCategoriesMaster/assetSubCategories/editAssetsSubCategories/EditAssetsSubCategory";
import DetailsSubCategories from "./Admin-pannel/Components/assetCategoriesMaster/assetSubCategories/detailsSubCategories/DetailsSubCategories";
import AddDepartment from "./Admin-pannel/Components/manageDepartmentmaster/department/addDepartment/AddDepartment";
import DetailsDepartment from "./Admin-pannel/Components/manageDepartmentmaster/department/detailsDepartment/DetailsDepartment";
import DeliveryChalanReportPage from "./Admin-pannel/Pages/deliveryChalan/deliveryChalanReport/Index";
import AddDeliveryChalanPage from "./Admin-pannel/Pages/deliveryChalan/addDeleveryChallan/Index";

import ReportAssetStatus from "./Admin-pannel/Components/assetReport/aseetStatus/AssetStatus";
import ReportAllocation from "./Admin-pannel/Components/assetReport/assetAllocations/AssetAllocation";

import AssetRequest from "./Admin-pannel/Components/requestModule/assetrequest/AssetRequest";
import AssetIssue from "./Admin-pannel/Components/requestModule/assetIssue/AssetIssue";
import AllCustomerPage from "./Admin-pannel/Pages/allCustomer";
// import Shift from "./Admin-pannel/Components/crmNew/components/shift/Shift";
// import EditWholsaleProducts from "./Admin-pannel/Pages/editWholsaleProducts";
import AddCustomer from "./Admin-pannel/Components/customerList/AddCustomer";
import EditComboProducts from "./Admin-pannel/Pages/addComboProduct/EditComboProducts";
// import NewDashboardCard from "./Admin-pannel/Components/crmNew/components/Card/Dashboard/NewDashboardCard";
// import Contacts from "./Admin-pannel/Components/crmNew/components/CRM/Contacts/Contacts";

// import AssetComments from "./Admin-pannel/Components/assetCategoriesMaster/assetComment/AssetComments";
// import AssetStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/AssetStatus";

// import socialMediaSystemCredentialPage from "./Admin-pannel/Pages/socialMediaSystemCredentialPage";

// shoaib code

// import AddAssetCategories from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/AddAssetCategories";
// import AssetAddCategory from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetAddCategory";
// import AssetCategorey from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetCategorey";
// import AssetCategoryDetails from "./Admin-pannel/Components/assetCategoriesMaster/assetCategoryList/AssetCategoryDetails";
// import AssetSubCatecories from "./Admin-pannel/Components/assetCategoriesMaster/assetSubCategories/AssetSubCatecories";
// import AssetComments from "./Admin-pannel/Components/assetCategoriesMaster/assetComment/AssetComments";
// import AssetStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/AssetStatus";
// import Department from "./Admin-pannel/Components/manageDepartmentmaster/department/Department";
// import SubDepartMent from "./Admin-pannel/Components/manageDepartmentmaster/subDepartment/SubDepartMent";
// import Desigination from "./Admin-pannel/Components/manageDepartmentmaster/desgination/Desigination";

// {Shoaib and Mustafa Imports start}

// import ReportAssetStatus from "./Admin-pannel/Components/assetReport/aseetStatus/AssetStatus";
// import ReportAllocation from "./Admin-pannel/Components/assetReport/assetAllocations/AssetAllocation";
import AssetsAddComment from "./Admin-pannel/Components/assetCategoriesMaster/assetComment/assetsAddComment/AssetsAddComment";
import AssetsList from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/assetsList/AssetsList";
import DetailsAssets from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/detailsAssets/DetailsAssets";
import EditAssets from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/editAssets/EditAssets";
import Allocate from "./Admin-pannel/Components/assetCategoriesMaster/addAssetCategories/allocate/Allocate";

import AddAssetsStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/addAssetsStatus/AddAssetsStatus";
import EditAssetsStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/editAssetsStatus/EditAssetsStaus";
import DetailsAssetsStatus from "./Admin-pannel/Components/assetCategoriesMaster/assetStatus/detailsAssetsStatus/DetailsAssetsStatus";

// import EditDepartment from "./Admin-pannel/Components/manageDepartmentmaster/department/editDepartment/EditDepartment";
import EditDepartment from "./Admin-pannel/Components/manageDepartmentmaster/department/editDepartment/EditDepartment";
import AddSubDepartment from "./Admin-pannel/Components/manageDepartmentmaster/subDepartment/addSubDepaetment/AddSubDepartment";
import EditSubDepartment from "./Admin-pannel/Components/manageDepartmentmaster/subDepartment/editSubDepartment/EditSubDepartment";
import DetailsSubDepartment from "./Admin-pannel/Components/manageDepartmentmaster/subDepartment/detailsSubDepartment/DetailsSubDepartment";

import AddDesigination from "./Admin-pannel/Components/manageDepartmentmaster/desgination/addDesgination/AddDesgination";
import EditDesgination from "./Admin-pannel/Components/manageDepartmentmaster/desgination/editDesgination/EditDesgination";
import DetailsDesgination from "./Admin-pannel/Components/manageDepartmentmaster/desgination/detailsDesgination/DetailsDesgination";
import AssetsDashboardAdminComp from "./Admin-pannel/Components/assetsDashboard/AssetsDashboard";
import AddTicket from "./Admin-pannel/Components/asideAdim/AddTicket";
import ComplaintType from "./Admin-pannel/Components/ComplaintType";
import ComplaintNature from "./Admin-pannel/Components/ComplaintNature";
import StaffTicketList from "./Admin-pannel/Components/StaffTicketList";
import EditStaffTicket from "./Admin-pannel/Components/EditStaffTicket";

import ComplaintsDashboardPages from "./Admin-pannel/Pages/complaintsDashboardPages";
import ComplaintDetail from "./Admin-pannel/Components/complaintsDashboard/complaintDashboardDetails/ComplaintDetail";

// {Shoaib and Mustafa Imports end}

// {Nizam import start}
// import EtsyAccList from "./pages/etsyAccList";
import EtsyAccList from "./Admin-pannel/Pages/etsyAccList/index";
// import NewEtsyAccount from "./components/etsyAccountList/NewEtsyAccount/newEtsyAcc";
import NewEtsyAccount from "./Admin-pannel/Components/etsyAccountList/NewEtsyAccount/newEtsyAcc";
import GeneralSetting from "./Admin-pannel/Components/setting&Configuration/generalSetting/GeneralSetting";
import EtsySettings from "./Admin-pannel/Components/etsyGeneralSettings/EtsySettings";
import AmazonAccountListPage from "./Admin-pannel/Pages/amazonAccount-list";
import AmazonAccountInformation from "./Admin-pannel/Components/amazon-account/amazonAccountList/amazonAccount-information/AmazonAccountInformation";
import NewAmazonAccountPage from "./Admin-pannel/Pages/newAmazon-account";
import AddAmazonAccount from "./Admin-pannel/Components/amazon-account/amazonAccountList/addAmazonAccount/AddAmazonAccount";
import NewAmazonAcInfo from "./Admin-pannel/Components/amazon-account/new-amazon-account/new-amazon-acInfo/NewAmazonAcInfo";
import NewAmazonAcEdit from "./Admin-pannel/Components/amazon-account/new-amazon-account/new-amazon-acEdit/NewAmazonAcEdit";
import PricingRulesPage from "./Admin-pannel/Pages/pricingRules";
import AddPricingRules from "./Admin-pannel/Components/amazon-account/pricingRules/add-pricing-rule/AddPricingRule";
import EditPricingRule from "./Admin-pannel/Components/amazon-account/pricingRules/edit-pricing-rule/EditPricingRule";
import CategoryMapPage from "./Admin-pannel/Pages/categoryMap";
import CreateMap from "./Admin-pannel/Components/amazon-account/categoryMap/createMap/CreateMap";

// import DeliverySettings from "./Admin-pannel/pages/deliveryTimeSettings";
import DeliverySettings from "./Admin-pannel/Pages/deliveryTimeSettings";
import MarketPlacePre from "./Admin-pannel/Pages/marketPlacePreOrder";
import MarketTicket from "./Admin-pannel/Pages/marketTicket";
import MarketplaceValidator from "./Admin-pannel/Pages/marketplaceValidater";
import MyAssets from "./Admin-pannel/Components/myAssests/MyAssets";

// {Nizam import end}
// {Shhaz import start}

// import Drop from "./pages/dropship";
// import Drop from "./Admin-pannel/Pages/dropship";
import DropshipOrders from "./Admin-pannel/Pages/dropshipOrder";
import NewWarehouse from "./Admin-pannel/Components/dropship/newWarehouse/NewWarehouse";
import ManageShoppingRules from "./Admin-pannel/Components/manageShoppingRule/ManageShoppingRule";
import AddNewShoppingRule from "./Admin-pannel/Components/manageShoppingRule/addNewShoppingRule/AddNewShoppingRule";
import ManageDropshipProductUpload from "./Admin-pannel/Components/manageDropshipProductUpload/ManageDropshipProductUpload";
import RunDropshipProductProfile from "./Admin-pannel/Components/runDropshipProductProfile/RunDropshipProductProfile";
import DropshipDataFlowProfile from "./Admin-pannel/Components/dropshipDataFlowProfile/DropshipDataFlowProfile";
import Dropships from "./Admin-pannel/Pages/dropship";
import AddAssestsRequest from "./Admin-pannel/Components/addAssestsRequest/AddAssestsRequest";
import MyAssetsRequestList from "./Admin-pannel/Components/myAssestsRequestList/MyAssetsRequestList";
import AssestsRequestList from "./Admin-pannel/Components/assestsRequestList/AssestsRequestList";
import EditAssetsRequestList from "./Admin-pannel/Components/editAssetsRequestList/EditAssetsRequestList";
import AddVtechQuotation from "./Admin-pannel/Components/vtechQuotation/AddVtechQuotation";
import ListVtechQuotation from "./Admin-pannel/Components/vtechQuotation/ListVtechQuotation";
import Addnewcalls from "./Admin-pannel/Pages/addNewcalls";
import CallOverView from "./Admin-pannel/Pages/callOverView";
import EditComplaintType from "./Admin-pannel/Components/EditComplaintType";
import EditComplaintNature from "./Admin-pannel/Components/EditComplaintNature";
import AddUser from "./Admin-pannel/Components/user/addUser";

import "../src/assets2/styles/main.css";
import "../src/assets2/styles/responsive.css";
import AddAgreement from "./Admin-pannel/Pages/addAgreement/AddAgreement";
import VtechRentProductAdd from "./Admin-pannel/Pages/VtechRentProduct/VtechRentProductAdd";
import RentProductList from "./Admin-pannel/Pages/rentProductList/RentProductList";
import VtechPurchase from "./Admin-pannel/Pages/vtech-Purchase/VtechPurchase.";
import AddVtechStockac from "./Admin-pannel/Pages/add-v-tech-Transfer-stock/AddVtechStockac";
import Leadfilter from "./Admin-pannel/Pages/leadsFilters/LeadfiltersV";
import LeadFilters from "./Admin-pannel/Pages/leadFiltersTemp/LeadFilters";
import Lead from "./Admin-pannel/Pages/leads";
import Customer from "./Admin-pannel/Pages/customer";
import ImportCustomers from "./Admin-pannel/Components/coustomer/importCustomers/importCust";
import ListVPurchaseStock from "./Admin-pannel/Pages/list-v-tech-Transfer-stock/ListVPurchaseStock";
import KnowledgeBase from "./Admin-pannel/Pages/knowledgeBaseCrm";
import AddNewArtical from "./Admin-pannel/Components/knowledgeBaseCrm/AddNewArtical";
import Group from "./Admin-pannel/Components/knowledgeBaseCrm/Group";
// import AddPrice from "./Admin-pannel/Pages/addPrices";
import ImportLeads from "./Admin-pannel/Pages/importLeads";
import Reminder from "./Admin-pannel/Pages/reminder";
import Proposal from "./Admin-pannel/Pages/salescrm/index";
import NewProposal from "./Admin-pannel/Components/salescrm/NewProposal";
import NewCustomers from "./Admin-pannel/Components/coustomer/newCustomers/newCustomer";
import EstimateSales from "./Admin-pannel/Pages/estimateSales";
import NewEstimate from "./Admin-pannel/Components/estimateSales/NewEstimate";
import Task from "./Admin-pannel/Pages/taskCrm";
import TaskOverview from "./Admin-pannel/Components/taskCrm/TaskOverview";
import Dashboard from "./Admin-pannel/Pages/dashboardCrm";
import RecruitmentDashboard from "./Admin-pannel/Pages/reqcruitmentDashboard";
import Project from "./Admin-pannel/Pages/Projects";
import AddNewProject from "./Admin-pannel/Components/project/AddNewProject";
import RecruitmentDashNew from "./Admin-pannel/Components/RecruitmentDash/RecruitmentDashNew";
import ProjectView from "./Admin-pannel/Pages/project/ProjectView";
import ChartOfAccounts from "./Admin-pannel/Pages/accounts/accounts/ChartOfAccounts";
import ChartOfAccountGroup from "./Admin-pannel/Pages/accounts/accounts/ChartOfAccountsGroup";
import Groups from "./Admin-pannel/Pages/accounts/accounts/Groups";
import AddVochers from "./Admin-pannel/Pages/accounts/Vochers/AddVochers";
import Ladgers from "./Admin-pannel/Pages/accounts/ladgeradd/ladger/Ladgers";
import AddCompany from "./Admin-pannel/Pages/accounts/addcompany/listLadger/ListLadger";
import Setting from "./Admin-pannel/Pages/accounts/setting/Setting";
import Generals from "./Admin-pannel/Pages/accounts/setting/Generals";
import Banking from "./Admin-pannel/Pages/accounts/setting/Banking";
import AddBanking from "./Admin-pannel/Pages/accounts/setting/AddBanking";
import DashboarD from "./Admin-pannel/Pages/Dashboard/Dashboard";
import Report from "./Admin-pannel/Pages/accounts/report/Report";
import Rpblancesheetcomprasion from "./Admin-pannel/Pages/accounts/rpblancesheetcommp/Rpblancesheetcomprasion";
import AddCompanys from "./Admin-pannel/Pages/accounts/company/AddCompanys";
import ListGroups from "./Admin-pannel/Pages/accounts/addcompany/listLadger/ListGroups";
import ListCompany from "./Admin-pannel/Pages/accounts/company/ListCompany";
import ListsLegers from "./Admin-pannel/Pages/accounts/ladgeradd/ladger/ListsLegers";
import ReportsLedgers from "./Admin-pannel/Pages/accounts/ladgeradd/ladger/ReportsLedgers";
import ReportsGroup from "./Admin-pannel/Pages/accounts/addcompany/listLadger/ReportsGroup";
import ListVochers from "./Admin-pannel/Pages/accounts/Vochers/ListVochers";
import DayBooks from "./Admin-pannel/Pages/accounts/addcompany/books/DayBooks";
import CustomFelds from "./Admin-pannel/Pages/settings/custom_fields/CustomFelds";
// {Shaaz import end}

// {daud import start}
// import AmazonAccountListPage from "./Admin-pannel/Pages/amazonAccount-list/index";
// import AmazonAccountInformation from "./components/amazon-account/amazonAccountList/amazonAccount-information/AmazonAccountInformation";
// import AddAmazonAccount from "./components/amazon-account/amazonAccountList/addAmazonAccount/AddAmazonAccount";
// import NewAmazonAccountPage from "./pages/newAmazon-account";
// import PricingRulesPage from "./pages/pricingRules";
// import NewAmazonAcInfo from "./components/amazon-account/new-amazon-account/new-amazon-acInfo/NewAmazonAcInfo";
// import NewAmazonAcEdit from "./components/amazon-account/new-amazon-account/new-amazon-acEdit/NewAmazonAcEdit";
// import AddPricingRules from "./components/amazon-account/pricingRules/add-pricing-rule/AddPricingRule";
// import EditPricingRule from "./components/amazon-account/pricingRules/edit-pricing-rule/EditPricingRule";
// import CategoryMapPage from "./pages/categoryMap";
// import CreateMap from "./components/amazon-account/categoryMap/createMap/CreateMap";
// {daud import end}
import CreateCostCentrePage from "./Admin-pannel/Pages/createCostCentre";
import CreateCostCentreCategorypage from "./Admin-pannel/Pages/createCostCentreCategory";
import CreateBudgetPage from "./Admin-pannel/Pages/createBudgetPage";
import BudgetListpage from "./Admin-pannel/Pages/budgetListPage";
import EditBudgetPage from "./Admin-pannel/Pages/editBudgetPage";
import CreateVoucherTypePage from "./Admin-pannel/Pages/createVoucherTypePage";
import ListVoucherTypePage from "./Admin-pannel/Pages/listVoucherTypePage";
import EditVoucherTypePage from "./Admin-pannel/Pages/editVoucherTypePage";
import CostCentreListPage from "./Admin-pannel/Pages/costCentreListpage";
import EditCostCentrePage from "./Admin-pannel/Pages/editCostCentrePage";
import ListCostCentreCategoryPage from "./Admin-pannel/Pages/listCostCentreCategoryPage";
import EditCostCentreCategoryPage from "./Admin-pannel/Pages/editCostCentreCategoryPage";
import Custom_fields_add from "./Admin-pannel/Pages/settings/custom_fields/Custom_fields_add";
import SalesTaxRepors from "./Admin-pannel/Pages/salesTaxReport/index";
import PurchaseTaxReport from "./Admin-pannel/Pages/purchaseTaxReport";
import SupplierItemsReport from "./Admin-pannel/Pages/supplierItemsReport";
import SalesReports from "./Admin-pannel/Pages/salesReport/index";
import SalesReturnReport from "./Admin-pannel/Pages/salesReturnReport";
import SellerPointsReturn from "./Admin-pannel/Pages/sellerPointsReport";
import PurchaseReport from "./Admin-pannel/Pages/purchaseReport";
import PurchaseReturnReport from "./Admin-pannel/Pages/purchaseReturnReport";
import ExpenseReport from "./Admin-pannel/Pages/expenseReport";
import StockReportV from "./Admin-pannel/Pages/stockReport";
import SaleItemReport from "./Admin-pannel/Pages/salesItemReport";
import ReturnItemsReport from "./Admin-pannel/Pages/returnItemsReport";
import BillsofMaterials from "./Admin-pannel/Pages/billsofMaterials";
import ViewBillsofMaterials from "./Admin-pannel/Components/billsofMaterials/ViewBillsofMaterials";
import SalesGstreport from "./Admin-pannel/Pages/SalesGstReport";
import PurchaseGstreport from "./Admin-pannel/Pages/PurchaseGstReport";
import SalesSummaryreport from "./Admin-pannel/Pages/SalesSummaryReport";
import SalesSummaryreports from "./Admin-pannel/Pages/SalesSummaryReport";
import StockTransferreports from "./Admin-pannel/Pages/StockTransferReport";
import SalesReturnPaymentsreports from "./Admin-pannel/Pages/SalesReturnPaymentsReport";
import SalesPaymentsreports from "./Admin-pannel/Pages/SalesPaymentsReport";
import PurchasePaymentsreports from "./Admin-pannel/Pages/PurchasePaymentsReport";
import MyTodoSetting from "./Admin-pannel/Pages/myTodoSettings";
import ToDoLists from "./Admin-pannel/Pages/toDolist";
import Routings from "./Admin-pannel/Pages/routings";
import WorkCenter from "./Admin-pannel/Pages/workCenter";
import ManufacturingOrder from "./Admin-pannel/Pages/manufacturingOrder";
import WorkOrder from "./Admin-pannel/Pages/workOrder";
import ViewWorkOrder from "./Admin-pannel/Components/workOrder/ViewWorkOrder";
import JobDesc from "./Admin-pannel/Pages/jobDescriptions";
import GroupManagement from "./Admin-pannel/Components/jobDescription/groupManagement/GroupManagement";
import ImportExcel from "./Admin-pannel/Components/jobDescription/importExcel/ImportExcel";
import ViewJob from "./Admin-pannel/Components/jobDescription/viewJob/ViewJob";
import ORGChart from "./Admin-pannel/Pages/orgchart";
import Onboardings from "./Admin-pannel/Pages/onBoarding";
import Hrrecords from "./Admin-pannel/Pages/hrRecord";
import NewStaffMember from "./Admin-pannel/Components/hrRecords/newStaffMembers/NewStaffMember";
import ImportFromExcel from "./Admin-pannel/Components/hrRecords/importFromExcel/ImportExcel";
import ViewRecords from "./Admin-pannel/Components/hrRecords/ViewHrRecords/View";
import SettingManfucture from "./Admin-pannel/Pages/settingManufacture";
import WorkingHours from "./Admin-pannel/Components/settingManufacture/WorkingHours";
import UnitOfMeasureCat from "./Admin-pannel/Components/settingManufacture/UnitOfMeasureCat";
import UnitOfMeasure from "./Admin-pannel/Components/settingManufacture/UnitOfMeasure";
// import GeneralSetting from "./Admin-pannel/Components/settingManufacture/GeneralSetting";
import GeneralSettings from "./Admin-pannel/Components/settingManufacture/GeneralSetting";
import AddWorkingHours from "./Admin-pannel/Components/settingManufacture/AddWorkingHours";
import SerialWiseStockReport from "./Admin-pannel/Pages/reports/SerialWiseStockReport";
import SerialCodeTracking from "./Admin-pannel/Pages/reports/SerialCodeTracking";
import AddvTechPurchase from "./Admin-pannel/Pages/vtech-Purchase/ListvTechPurchase";
import ListvTechPurchase from "./Admin-pannel/Pages/vtech-Purchase/ListvTechPurchase";
import Country from "./Admin-pannel/Pages/setup&Configuration/country/Country";
import UnitPage from "./Admin-pannel/Pages/unit/UnitPage";
import Trainings from "./Admin-pannel/Pages/hrRecord/Training";
import Trainingprograms from "./Admin-pannel/Components/HRrecord/Training/Trainingprograms";
import Traininglibraries from "./Admin-pannel/Components/HRrecord/Training/Traininglibraries";
import Trainingresults from "./Admin-pannel/Components/HRrecord/Training/Trainingresults";
import ContractS from "./Admin-pannel/Pages/hrRecord/Contracts";
import ContractSV from "./Admin-pannel/Pages/hrRecord/Contracts";
import NewContracts from "./Admin-pannel/Components/HRrecord/Contracts/NewContract";
import DependantS from "./Admin-pannel/Pages/hrRecord/Dependant";
import AddTimeSlote from "./Admin-pannel/Pages/timeSlote/AddTimeSlote";
import SAles from "./Admin-pannel/Pages/sales";
import PRoduct from "./Admin-pannel/Pages/Products";
import Pointofsale from "./Admin-pannel/Pages/pointofsale";
import REntal from "./Admin-pannel/Pages/rental";
import Subscrip from "./Admin-pannel/Pages/subscription";
import Salesperson from "./Admin-pannel/Pages/salesperson";
import LeadsCRM from "./Admin-pannel/Pages/leadsCrm";
import PipeLine from "./Admin-pannel/Pages/pipeLine";
import Account from "./Admin-pannel/Pages/accounting";
import ProjectDashBord from "./Admin-pannel/Pages/projectDashbord";
import ReportExl from "./Admin-pannel/Pages/reportExl";
import ReportEx2 from "./Admin-pannel/Pages/reportEx2";
import Fareenas from "./Admin-pannel/Pages/fareenasM";
import Odoo from "./Admin-pannel/Pages/odOO";
import EditBrands from "./Admin-pannel/Components/brandsComponents/EditBrand";
import Timesheet from "./Admin-pannel/Pages/timesheets";
import HelpDesk from "./Admin-pannel/Pages/helpDesk";
import HrEmployee from "./Admin-pannel/Pages/hrEmpoloyee";
import Invoice from "./Admin-pannel/Pages/invoice";
import BenchMark from "./Admin-pannel/Pages/benchmark";
import Expenses from "./Admin-pannel/Pages/expense";
import Purchas from "./Admin-pannel/Pages/purchase";
import Vender from "./Admin-pannel/Pages/venders";
import Inventoryof from "./Admin-pannel/Pages/inventory";
import Inventoryfl from "./Admin-pannel/Pages/Inventoryflow";
import Marketing from "./Admin-pannel/Pages/marketing";
import Ecommers from "./Admin-pannel/Pages/ecommerse";

import ColorStonePage from "./Admin-pannel/Pages/generalMaster/colorStone/Index";
import AddColorStone from "./Admin-pannel/Components/generalMaster/colorStone/addColorStone/AddColorStone";
import LabourChangeTypePage from "./Admin-pannel/Pages/generalMaster/labourChangeType/Index";
import LabourChargePage from "./Admin-pannel/Pages/generalMaster/labourCharge/Index";
import PricePage from "./Admin-pannel/Pages/generalMaster/price/Index";
import AddPrice from "./Admin-pannel/Components/generalMaster/price/addPrice/AddPrice";
import ShopForModulePage from "./Admin-pannel/Pages/generalMaster/shopForModule/Index";
import AddShopForModule from "./Admin-pannel/Components/generalMaster/shopForModule/addShopForModule/AddShopForModule";
import OccasionPage from "./Admin-pannel/Pages/generalMaster/occasion/Index";
import AddOccasion from "./Admin-pannel/Components/generalMaster/occasion/addOccasion/AddOccasion";
import RingSizePage from "./Admin-pannel/Pages/generalMaster/ringSize/Index";
import AddRingSize from "./Admin-pannel/Components/generalMaster/ringSize/addRingSize/AddRingSize";
import CouponnPage from "./Admin-pannel/Pages/generalMaster/coupon/Index";
import AddCoupan from "./Admin-pannel/Components/generalMaster/coupon/addCoupan/AddCoupan";

import MetalPurityPage from "./Admin-pannel/Pages/jewellery/metalPurity/Index";
import AddMetalType from "./Admin-pannel/Components/jewellery/metalPurity/addMetalType/AddMetalType";
import MetalWeightPage from "./Admin-pannel/Pages/jewellery/metalWeight/Index";
import AddDiamondColorPage from "./Admin-pannel/Pages/jewellery/diamond/addDiamondColor/Index";
import AddDiamondClarityPage from "./Admin-pannel/Pages/jewellery/diamond/addDiamondClarity";
import AddDiamondQualityPage from "./Admin-pannel/Pages/jewellery/diamond/addDiamondQuality/Index";
import AddDiamondShapePage from "./Admin-pannel/Pages/jewellery/diamond/addDiamondShape/Index";
import AddDiamondSievesPage from "./Admin-pannel/Pages/jewellery/diamond/addDiamondSieves/Index";
// import AddJwelleryProductPage from "./Admin-pannel/Pages/addJwelleryProductPage";
// import ListProductsJwellPage from "./Admin-pannel/Pages/listProductsJwellPage";
import EditShopForModulePage from "./Admin-pannel/Pages/editShopForModulePage";
import EditPricePage from "./Admin-pannel/Pages/editPricePage";
import EditOccassionPage from "./Admin-pannel/Pages/editOccassionPage";
import AddLabourChargePage from "./Admin-pannel/Pages/addLabourChargePage";
import AddLabourChargeTypePage from "./Admin-pannel/Pages/addLabourChargeTypePage";
import EditLabourChargeTypePage from "./Admin-pannel/Pages/editLabourChargetypePage";
import EditLabourChargePage from "./Admin-pannel/Pages/editLabourChargePage";
import EditColorStonepage from "./Admin-pannel/Pages/editColorStonePage";
import EditRingSize from "./Admin-pannel/Pages/editRingSizepage";
import EditRingSizePage from "./Admin-pannel/Pages/editRingSizepage";
import CategoryTypeJwellsPage from "./Admin-pannel/Pages/CatregoryTypeJwellsPage";
import AddCategoryTypeJwellsPage from "./Admin-pannel/Pages/addCategoryTypeJwellsPage";
import EditCategoryTypeJwellsPage from "./Admin-pannel/Pages/editCategoryTypeJwellsPage";
import AddMetalWeightPage from "./Admin-pannel/Pages/addMetalWeightPage";
import EditMetalWeightPage from "./Admin-pannel/Pages/editMetalWeightPage";
import AddCategorySequencePage from "./Admin-pannel/Pages/addCategorySequencePage";
import AddStyleManagementPage from "./Admin-pannel/Pages/addStyleManagmentPage";
import AddCollectionManagementPage from "./Admin-pannel/Pages/addCollectionManagmentPage";
import ListDiamondQuality from "./Admin-pannel/Components/jewellery/diamond/listDiamondQuality.js/ListDiamondQuality";
import EditDiamondQuality from "./Admin-pannel/Components/jewellery/diamond/editDiamondQuality.js/EditDiamondQuality";
import ListDiamondShieves from "./Admin-pannel/Components/jewellery/diamond/listDiamondShieves/ListDiamondShieves";
import EditDiamondSieves from "./Admin-pannel/Components/jewellery/diamond/editDiamondSieves/EditDiamondSieves";
import ListDiamondShape from "./Admin-pannel/Components/jewellery/diamond/listDiamondShape/ListDiamondShape";
import EditDiamondShape from "./Admin-pannel/Components/jewellery/diamond/editDiamondShape/EditDiamondShape";
import EditMetalPurity from "./Admin-pannel/Components/jewellery/diamond/editMetalPurity/EditMetalPurity";
import ListDiamondClarity from "./Admin-pannel/Components/jewellery/diamond/listDiamondClarity/ListDiamondClarity";
import EditDiamondClarity from "./Admin-pannel/Components/jewellery/diamond/editDiamondClarity/EditDiamondClarity";
// import AddJwelleryProductPage222 from "./Admin-pannel/Pages/addJwelleryProduct222Page";
// import AddMetalTypeComp from "./Admin-pannel/Components/jewellery/addMetalTypeComp/AddMetalTypeComp";
import MetalTypePage from "./Admin-pannel/Pages/jewellery/metalTypePage";
import AddMetalTypePage from "./Admin-pannel/Pages/addMetalTypePage";
import EditMetalTypePage from "./Admin-pannel/Pages/editMetalTypePage";
import AddTimeGroup from "./Admin-pannel/Pages/timegroup/TimeGroup";
import TLAddB from "./Admin-pannel/Components/HRrecord/Training/TLAddB";
import AllTaskS from "./Admin-pannel/Pages/FieldService/AllTasks/AllTasks";
import Toschedule from "./Admin-pannel/Pages/FieldService/ToSchedule";
import Toinvoice from "./Admin-pannel/Pages/FieldService/AllTasks/ToInvoice";
import NewButton from "./Admin-pannel/Components/FieldService/AllTask/NewButton";
import MyTaskS from "./Admin-pannel/Pages/FieldService/MyTasks";
import Byuser from "./Admin-pannel/Pages/FieldService/Planning/ByUser";
import TasksAnalysis from "./Admin-pannel/Components/FieldService/Reporting/TasksAnalysis/TasksAnalysis";
import BarchartA from "./Admin-pannel/Components/FieldService/BarchartA";
import CRM1 from "./Admin-pannel/Pages/crmDashboddo";
import PurchasoDo from "./Admin-pannel/Pages/purchaseoddo";
import ReqForQuatation from "./Admin-pannel/Components/purchaseoddo/ReqForQuatation";
import CreateDraftInvoice from "./Admin-pannel/Components/purchaseoddo/CreateDraftInvoice";
import EmailMarketing from "./Admin-pannel/Pages/emailMarketingoddo";
import NewMail from "./Admin-pannel/Components/emailMarketingoddo/NewMail";
import AddFaq from "./Admin-pannel/Pages/FAQ/AddFaq";
import FaqMaster from "./Admin-pannel/Pages/FAQ/faqmaster/FaqMaster";
import ListFaqAdmin from "./Admin-pannel/Pages/FAQ/ListFaqAdmin";
import List_Subscribe from "./Admin-pannel/Pages/FAQ/list_Subscribe/List_Subscribe";
import RoboticMaster from "./Admin-pannel/Components/roboticMaster/RoboticMaster";
import RoboticMasterEdit from "./Admin-pannel/Components/roboticMaster/RoboticMasterEdit";
import RoboticList from "./Admin-pannel/Components/roboticMaster/RoboticMasterList";
import SellerFillupForm from "./Admin-pannel/Components/allSeller/SellerFillupForm";
import SpecialSellerListPage from "./Admin-pannel/Pages/specialSellerList/Index";
import SpecialSellerDetailsPage from "./Admin-pannel/Pages/specialSellerList/specialSellerDetails";
import Division_and_districtAdd from "./Admin-pannel/Components/specialSeler/division_and_districts/Division_and_districtAdd";
import Districs from "./Admin-pannel/Components/specialSeler/dstrict/Districs";
import Application_track from "./Admin-pannel/Components/specialSeler/Tracker/Application_track";
import Add_privacyPolicy from "./Admin-pannel/Pages/crmspages/privacyPolicy/Add_privacyPolicy";
import AddTermsAndCondition from "./Admin-pannel/Pages/crmspages/TermsAndCondition/AddTermsAndCondition";
import ContactMailInfo from "./Admin-pannel/Pages/contactMail/ContactMailInfo";
import LoginSetting from "./Admin-pannel/Pages/loginsetting/LoginSetting";
import AllQuestion from "./Admin-pannel/Pages/allReviews/AllQuestion";
import ContactMessage from "./Admin-pannel/Pages/ContactMessage/ContactMessage";
import ShippingCostArea from "./Admin-pannel/Pages/shippingCostArea/ShippingCostArea";
import ShippingSetting from "./Admin-pannel/Pages/shippingCostArea/ShippingSetting";
import JobDepartment from "./Admin-pannel/Pages/jobDescriptions/jobdepartment/JobDepartment";
import JobGroup from "./Admin-pannel/Pages/jobDescriptions/jobgroup/JobGroup";
import ReasionMaster from "./Admin-pannel/Pages/specialSellerList/ReasionMaster";
import IndustryMaster from "./Admin-pannel/Pages/industry/IndustryMaster";
import IndustryCreate from "./Admin-pannel/Pages/industry/IndustryCreate";
import Category_Attributes from "./Admin-pannel/Pages/category_attributes/Category_Attributes";
import AddCelebritiesPage from "./Admin-pannel/Pages/addCelebritiesPage";
import ListCelebritiesPage from "./Admin-pannel/Pages/listCelebritiesPage";
import AddCelebritiesTypePage from "./Admin-pannel/Pages/addCelebritiesTypePage";
import GeneralCelebritiesListPage from "./Admin-pannel/Pages/generalCelebritiesPage";
import ListChiragFoundationsOrders from "./Admin-pannel/Pages/listChiragFoundationOrders";
import EditSetAttributesPage from "./pages/editSetAttributesPage";
import ListChiragFoundationCustomersPage from "./Admin-pannel/Pages/listChiragFoundationCustomersPage";
import AddCelebrityCategoryPage from "./Admin-pannel/Pages/addcelebrityCategoryPage";
import ListCelebrityCategoryPage from "./Admin-pannel/Pages/listCelebrityCategoryPage";
import AddIndexGroupPage from "./Admin-pannel/Pages/addIndexGroupPage";
import ListIndexGroupPage from "./Admin-pannel/Pages/listIndexGroupPage";
import UpdateIndexGroupPage from "./Admin-pannel/Pages/updateIndexGroupPage";
import CreateCelebrityComp from "./Admin-pannel/Components/createCelebrityComp/CreateCelebrityComp";
import UpdateCelebrityPage from "./Admin-pannel/Pages/updateCelebrityPage";
import AddPriceRangePage from "./Admin-pannel/Pages/addpriceRangePage";
import ListPriceRangePage from "./Admin-pannel/Pages/listPriceRangePage";
import UpdatePriceRangePage from "./Admin-pannel/Pages/updatePriceRangePage";
import AddGradePage from "./Admin-pannel/Pages/addGradePage";
import ListGradesPage from "./Admin-pannel/Pages/listGradesPage";
import UpdateGradePage from "./Admin-pannel/Pages/updateGradePage";

// {29-12-23}
import MeatlRatecardPage from "./Admin-pannel/Pages/metalRatecardPage";
import AddMetalRateCardPage from "./Admin-pannel/Pages/addMetalRateCardpage";
import EditMetalRateCardPage from "./Admin-pannel/Pages/editMetalRatecardPage";
import DiamondRateCardPage from "./Admin-pannel/Pages/diamondRateCaedPage";
import AddDiamondRateCardPage from "./Admin-pannel/Pages/addDiamondRateCardPage";
import EditDiamondRateCardPage from "./Admin-pannel/Pages/editDiamondRateCardPage";
import LabourChargeRateCardPage from "./Admin-pannel/Pages/labourChargerateCardPage";
import AddLabourChargeRateCardPage from "./Admin-pannel/Pages/addlabourChargeRateCardPage";
import EditLabourChargeRateCardPage from "./Admin-pannel/Pages/editLabourChargeRateCardPage";
import ColorStonerateCardPage from "./Admin-pannel/Pages/colorStoneRateCardPage";
import AddColorStoneRateCardPage from "./Admin-pannel/Pages/addColorStoneRateCardPage";
import EditColorStoneRateCardPage from "./Admin-pannel/Pages/editColorStoneRateCardPage";

import AddJwelleryProductPage222 from "./Admin-pannel/Pages/addJwelleryProduct222Page";
import ListJwelleryProductsPage from "./Admin-pannel/Pages/listJwelleryProductsPage";
import EditJwelleryProductsPage from "./Admin-pannel/Pages/editJwelleryProductsPage";

import ProductWearTagPage from "./Admin-pannel/Pages/productWearTagPage";
import AddProductWearTagPage from "./Admin-pannel/Pages/addProductWearTagPage";
import EditProductWearTagPage from "./Admin-pannel/Pages/editProductWearTagPage";
import ProductLookTagPage from "./Admin-pannel/Pages/productLookTagPage";
import AddProductLookTagPage from "./Admin-pannel/Pages/addProductLooktagPage";
import EditProductLookTagPage from "./Admin-pannel/Pages/editProductLookTagPage";
import ProductTagPage from "./Admin-pannel/Pages/productTagPage";
import AddProductTagPage from "./Admin-pannel/Pages/addProductTagPage";
import EditProductTagPage from "./Admin-pannel/Pages/editProductTagPage";
import SizeJwellsPage from "./Admin-pannel/Pages/sizeJwellsPage";
import AddSizeJwellsPage from "./Admin-pannel/Pages/addSizeJwellsPage";
import EditSizeJwellsPage from "./Admin-pannel/Pages/editSizeJwellsPage";

import MetalPriceTypePage from "./Admin-pannel/Pages/metalPriceTypePage";
import AddMetalPriceTypePage from "./Admin-pannel/Pages/addMetalPriceTypePage";
import EditMetalPriceTypePage from "./Admin-pannel/Pages/editMetalPriceTypePage";
import AddProduct from "./Admin-pannel/Pages/addnewProductsPage/addProduct";
import EditProduct from "./Admin-pannel/Pages/addnewProductsPage/editProduct";
import AddCelebritiesPackagePage from "./Admin-pannel/Pages/addCelebrityPackagePage";
import ListCelebrityPackagePage from "./Admin-pannel/Pages/listCelebrityPackagePage";
import EditCelebrityPackagePage from "./Admin-pannel/Pages/editCelebrityPackagePage";
import CelebrityGoogleDashboardPage from "./Admin-pannel/Pages/celebrityGoogleDashboardPage";
import ListStyleManagementPage from "./Admin-pannel/Pages/listStyleManagementPage";
import EditStyleManagementPage from "./Admin-pannel/Pages/editStyleManagemnetPage";
import ListCollectionManagementPage from "./Admin-pannel/Pages/listCollectionManagementPage";
import EditCollectionManagementpage from "./Admin-pannel/Pages/editCollectionManagementPage";
import AddMaterialJewelPage from "./Admin-pannel/Pages/addMeaterialJewelPage";
import ListMaterialJewelPage from "./Admin-pannel/Pages/listMaterialJewelPage";
import EditMaterialJewelPage from "./Admin-pannel/Pages/editMateralJewelPage";
import AddGemstonePage from "./Admin-pannel/Pages/addGemstonePage";
import ListGemstonePage from "./Admin-pannel/Pages/listGemstonePage";
import EditGemStonePage from "./Admin-pannel/Pages/editGemstonePage";
import AddThemeJewelPage from "./Admin-pannel/Pages/addThemeJewelPage";
import ListThemePage from "./Admin-pannel/Pages/listThemePage";
import EditThemeJewelPage from "./Admin-pannel/Pages/editThemeJewelPage";
import CreateCompany from "./Admin-pannel/Pages/accounts/company/CreateCompany";
import AllCompanyList from "./Admin-pannel/Pages/accounts/company/AllCompanyList";
import AddEditBlogPage from "./Admin-pannel/Pages/AddEditBlogPage";
import EditBlogNewPage from "./Admin-pannel/Pages/editBlogNewPage";
import AddEditBlogCategoryPage from "./Admin-pannel/Pages/AddEditBlogCategoryPage";
import EditBlogCategorryPage from "./Admin-pannel/Pages/editBlogCategorryPage";
import RoboticsPendingApplicationPage from "./Admin-pannel/Pages/roboticsPendingApplicationPage";
import RoboticsPendingApplicationListPage from "./Admin-pannel/Pages/roboticsPendingApplicationListPage";

function App() {
  const [show, setshow] = useState(true);

  return (
    <>
      {show && <Header />}
      <Routes>
        <Route path="/loginPage" element={<LoginSection setshow={setshow} />} />
        <Route path="/" element={<Navigate to="/loginPage" />} />
        <Route
          path="/admin"
          element={<DashboardRightSectionAdmin setshow={setshow} />}
        >
          <Route path="" element={<DashboardAdminPage />} />
          <Route path="products/all/products/create" element={<AddProduct />} />
          <Route path="products/all/edit/:id" element={<EditProduct />} />
          {/* <Route path="products/all/edit/:id" element={< AddNewProductsPage />} /> */}

          <Route
            path="products/all/products/create/comboProduct"
            element={<AddComboProduct />}
          />
          <Route
            path="products/all/comboProduct"
            element={<ListComboProdust />}
          />
          <Route
            path="products/all/comboProduct/edit/:id"
            element={<EditComboProducts />}
          />

          {/* Mustafa Works */}
          <Route path="login_setting" element={<LoginSetting />} />
          <Route path="robotic-master" element={<RoboticMaster />} />
          <Route path="robotic-master-list" element={<RoboticList />} />
          <Route
            path="robotic-master/edit/:id"
            element={<RoboticMasterEdit />}
          />
          <Route
            path="robotic-master/pending-list"
            element={<RoboticsPendingApplicationListPage />}
          />

          <Route
            path="robotic-master/pending-list/edit/:id"
            element={<RoboticsPendingApplicationPage />}
          />

          <Route path="task-project-dash" element={<ProjectDashBord />} />
          <Route path="time-sheets" element={<Timesheet />} />
          <Route path="help-desk" element={<HelpDesk />} />
          <Route path="hr-resources" element={<HrEmployee />} />
          <Route path="event-marketing" element={<Marketing />} />
          <Route path="ecommerse" element={<Ecommers />} />

          <Route path="unit" element={<UnitPage />} />
          <Route path="stock_report" element={<StockReport />} />
          <Route path="sales_report" element={<SalesReport />} />
          <Route path="register_report" element={<RegisterReport />} />
          <Route
            path="products_quantity_alerts"
            element={<ProductsQuantityAlerts />}
          />
          <Route path="products_report" element={<ProductsReport />} />
          <Route path="adjustments_report" element={<AdjustmentsReport />} />
          <Route path="categories_report" element={<CategoriesReport />} />
          <Route path="brands_report" element={<BrandsReport />} />
          <Route path="daily_sales" element={<Dailysales />} />
          <Route path="monthly_sales" element={<MonthlySales />} />
          <Route path="payments_report" element={<PaymentsReport />} />
          <Route path="tax_report" element={<TaxReport />} />
          <Route path="sales_tax_report" element={<SalesTaxReport />} />
          <Route path="daily_purchase" element={<DailyPurchase />} />
          <Route path="monthly_purchase" element={<MonthlyPurchase />} />
          <Route path="purchases_report" element={<PurchasesReport />} />
          <Route path="expenses_report" element={<ExpensesReport />} />
          <Route path="customer_report" element={<CustomerReport />} />
          <Route path="suppliers_report" element={<SuppliersReport />} />
          <Route path="staffs_report" element={<StaffsReport />} />
          <Route path="profit_loss" element={<ProfitLossReport />} />
          <Route path="mostViewed_products" element={<MostViewedProducts />} />
          <Route path="device_logs" element={<LoginDeviceHistory />} />
          <Route path="reported_products" element={<ReportedProducts />} />
          <Route path="requested-brands" element={<RequestedBrands />} />
          <Route path="all_reviews_ratings" element={<AllReviewsRatings />} />
          <Route path="sizechart" element={<SizeChart />} />
          <Route path="pos/sales" element={<POSSales />} />
          <Route path="damage-product-entry" element={<DamageProEntry />} />
          <Route path="product-damage-list" element={<ProductDamage />} />
          <Route path="material-re-order-list" element={<MaterialReorders />} />
          <Route
            path="product-transfer-entry"
            element={<ProductTransferEntry />}
          />
          <Route
            path="product-transfer-list"
            element={<ProductTransferList />}
          />
          <Route path="bulk_import_inventory" element={<BulkInventry />} />

          {/* sales_Modules */}
          <Route path="add_privacyPolicy" element={<Add_privacyPolicy />} />
          <Route
            path="add_TermsAndCondition"
            element={<AddTermsAndCondition />}
          />

          {/* <Route path="products/all/products/edit/:id" element={<AddNewProductsPage />} /> */}
          <Route path="products/seller" element={<SellerProductsPage />} />
          <Route path="brands" element={<BrandPageAdmin />} />
          <Route path="brands/edit/:id" element={<EditBrands />} />
          <Route path="brands_requested" element={<BrandRequest />} />

          <Route path="sellerBrand_List" element={<SellerBrnadList />} />
          <Route path="add_Seller_brand" element={<AddSellerBrnad />} />

          <Route path="time-slote" element={<AddTimeSlote />} />
          <Route path="time-group" element={<AddTimeGroup />} />

          {/* Front Ui */}
          <Route path="add_banner" element={<AddNewBanner />} />
          <Route path="list_banner/bannerEdit/:id" element={<AddNewBanner />} />
          <Route path="list_banner" element={<ListBanner />} />

          <Route path="add_faq" element={<AddFaq />} />
          <Route path="list_faq" element={<ListFaqAdmin />} />
          <Route path="faqsMaster" element={<FaqMaster />} />

          <Route path="list_Subscribe" element={<List_Subscribe />} />

          <Route path="attributes" element={<AttributeAdminPage />} />
          <Route path="product_attributes" element={<IndexPages />} />
          <Route
            path="product_attributes/edit/:uid"
            element={<EditSetAttributesPage />}
          />
          <Route path="category_attributes" element={<Category_Attributes />} />
          <Route
            path="/admin/category_attributes/edit/:id"
            element={<Category_Attributes />}
          />

          <Route path="attributes/edit/:id" element={<EditAttribute />} />
          <Route path="pos-activation" element={<PosConfigurationPage />} />
          <Route path="products/all" element={<AllProductsPage />} />

          <Route path="list-purchase" element={<ListPurchasePage />} />
          <Route path="add-purchase-list" element={<AddPurchaseListPage />} />

          <Route path="reviews" element={<ProductsReviewPage />} />
          <Route path="colors" element={<ColorsPage />} />
          <Route path="colors/edit/:id" element={<EditColor />} />
          <Route path="size" element={<SizePage />} />
          <Route path="size/edit/:id" element={<EditSize />} />
          <Route
            path="wholesale-product/create"
            element={<AddNewWholesaleProductsPage />}
          />
          <Route
            path="wholesale/all-products"
            element={<AllWholsaleProductsPage />}
          />
          {/* <Route path="wholesale/all-products/edit/:id" element={<EditWholsaleProducts />} /> */}
          <Route path="all_orders" element={<AllOrdersPage />} />

          <Route path="seller/all_orders" element={<SellerAllOrder />} />

          <Route
            path="assign_orders/status/:id"
            element={<AssighOrderStatus />}
          />

          <Route path="orders/status/:id" element={<OrderByStatus />} />

          <Route path="all_cancel_orders" element={<AllCancelOrders />} />

          <Route
            path="orders/PickupPints/:id"
            element={<OrderByPickupPoints />}
          />

          <Route
            path="all_orders/order-Details/:id"
            element={<OrdersDetailsPage />}
          />
          <Route path="inhouse-orders" element={<InHouseOrderPage />} />
          <Route path="seller-orders" element={<SellerOrdersPage />} />
          <Route
            path="orders_by_pickup_point"
            element={<PickUpPointOrderPage />}
          />
          <Route path="customer-list" element={<CustomerListPage />} />
          <Route path="customer-create" element={<AddCustomer />} />
          <Route
            path="customer-shippingAddress"
            element={<CustomerShippingAddress />}
          />
          <Route
            path="customer-shippingAddress/detail/:id"
            element={<CustomerShippingAdressDetail />}
          />
          {/* <Route path="customer-shippingAddress/create" element={<CustomerShippingAddList />} /> */}
          <Route path="customer-list/edit/:id" element={<AddCustomer />} />
          <Route
            path="customer-list/editBillings/:id"
            element={<NewCustomers />}
          />
          <Route path="seller" element={<AllSellerPage />} />

          {/* <Route path="customer" element={<AllCustomerPage />} /> */}

          <Route
            path="serial-wise-stock-report"
            element={<SerialWiseStockReport />}
          />
          <Route path="serial-code-tracking" element={<SerialCodeTracking />} />

          <Route
            path="in_house_sale_report"
            element={<InHouseProductsSalePage />}
          />
          <Route
            path="seller_sale_report"
            element={<SellerProductsSalePage />}
          />
          <Route path="stock_report" element={<ProductsStockPage />} />
          <Route path="wish_report" element={<ProductWhislistPage />} />
          <Route path="user_search_report" element={<UserSearchesPage />} />
          <Route path="commission-log" element={<ComissionHistoryPage />} />
          <Route
            path="wallet-history"
            element={<WalletRechargeHistoryPage />}
          />
          <Route path="Paymets" element={<PayoutsPage />} />
          <Route path="withdraw_requests_all" element={<PayoutRequestPage />} />
          <Route path="seller/payment-show" element={<PaymentShowPage />} />
          <Route path="vendor_commission" element={<SellerCommissionPage />} />
          <Route path="seller_packages" element={<SellerPackagePage />} />
          <Route
            path="seller_packages/create"
            element={<CreatePackagePage />}
          />
          <Route path="flash_deals" element={<FlashDealsPage />} />
          <Route path="flash_deals/edit/:id" element={<EditFlashDeal />} />
          <Route
            path="flash_deals/create"
            element={<FlashDealsInformationPage />}
          />
          <Route path="newsletter" element={<NewsLetterPage />} />
          <Route path="sms" element={<BulkSMSPage />} />
          <Route path="subscribers" element={<SubscribersPage />} />
          <Route path="seller_packages/edit/:id" element={<UpdateInfo />} />
          <Route path="verification/form" element={<VerificationFormPage />} />
          <Route path="seller-banners" element={<SellerBannerPage />} />
          <Route
            path="seller-banners/edit/:id"
            element={<EditSellerBanner />}
          />

          <Route path="affiliate" element={<AffiliatePage />} />
          <Route
            path="affiliate-cofiguration"
            element={<AfiliatedConfigurationPage />}
          />
          <Route path="affiliate-users" element={<AffiliateUserPage />} />
          <Route
            path="affiliate-users/verification/:id"
            element={<AffilliateUserVerification />}
          />
          <Route
            path="affiliate-users/deatails"
            element={<AffiliateUserDetailsPage />}
          />
          <Route path="refferal/users" element={<RefferalUsersPage />} />
          <Route path="uploaded-files" element={<UploadedFilePages />} />
          <Route path="uploaded-files/create" element={<UploadCreate />} />
          <Route
            path="affiliate/withdraw_requests"
            element={<AffiliateWithdrowPage />}
          />
          <Route path="affiliate/logs" element={<AffliateLogsPage />} />

          <Route path="coupon" element={<CouponPage />} />
          <Route
            path="coupon/create"
            element={<CouponInformationAddingPage />}
          />
          <Route
            path="coupon/edit/:id"
            element={<CouponInformationAddingPage />}
          />
          <Route path="support_ticket" element={<TicketPage />} />
          <Route
            path="support_ticket/edit/:id"
            element={<EditSupportTicket />}
          />
          <Route
            path="support_ticket/detail/:id"
            element={<SupportTicketDetailPage />}
          />
          <Route path="conversations" element={<ProductsConversationPage />} />
          <Route path="product-queries" element={<ProductsQuerriesPage />} />
          <Route
            path="offline-wallet-recharge-requests"
            element={<OfflineWalletRechargePage />}
          />
          <Route
            path="offline-seller-package-payment-requests"
            element={<OfflineSellerPackagePaymentRequestPage />}
          />
          <Route path="digitalproducts" element={<DigitalProductsPage />} />
          <Route
            path="digitalproducts/create"
            element={<NewDigitalProducts />}
          />
          <Route
            path="product-bulk-upload/index"
            element={<BulkImportPage />}
          />
          <Route path="refund-request-all" element={<RefundRequestPage />} />
          <Route path="paid-refund" element={<ApprovedRefundsPage />} />
          <Route path="rejected-refund" element={<RejectedRefundsPage />} />
          <Route
            path="refund-request-config"
            element={<RefundConfigurationPage />}
          />
          <Route path="blog" element={<AllPostPage />} />
          {/* <Route path="blog/edit/:id" element={<EditAllBlogsPost />} /> */}
          <Route path="blog/edit/:uid" element={<EditBlogNewPage />} />

          {/* <Route path="blog/create" element={<AddNewPost />} /> */}
          <Route path="blog/create" element={<AddEditBlogPage />} />

          <Route path="blog-category" element={<BlogCategoriesPage />} />
          {/* <Route path="blog-category/edit/:id" element={<EditBlogCategory />} /> */}
          <Route path="blog-category/edit/:uid" element={<EditBlogCategorryPage />} />
          {/* <Route path="blog-category/create" element={<AddCategories />} /> */}
          <Route path="blog-category/create" element={<AddEditBlogCategoryPage />} />
          <Route
            path="set-share-reward-points"
            element={<ShareRewardPointsPage />}
          />
          <Route
            path="set-like-reward-points"
            element={<LikeRewardPointsPage />}
          />
          <Route
            path="manual_payment_methods"
            element={<ManualPaymentMethordPage />}
          />
          <Route
            path="manual_payment_methods/create"
            element={<ManualPaymentMethordCreate />}
          />
          <Route
            path="manual_payment_methods/Information"
            element={<ManualPaymentMethordInformation />}
          />
          <Route path="otp-configuration" element={<OtpConfigurationPage />} />
          <Route path="sms-templates" element={<SmsTemplatesPage />} />
          <Route
            path="otp-credentials-configuration"
            element={<SetOtpCredentialPage />}
          />
          <Route
            path="club-points/configuration"
            element={<ClubPointConfigurationPage />}
          />
          <Route path="club-points/index" element={<UserPointPage />} />
          <Route
            path="club-points/index/edit/:id"
            element={<EditUserPoint />}
          />
          <Route path="club-points/Details" element={<UsrPointsDetails />} />
          <Route path="set-club-points" element={<SetProductPointPage />} />
          <Route
            path="set-club-points/edit/:id"
            element={<EditAllPointsTable />}
          />

          <Route
            path="african/configuration"
            element={<AfricanPgConfigurationPage />}
          />
          <Route
            path="african/configuration/payment-method"
            element={<PaymentMethodPage />}
          />
          <Route
            path="credentials_index"
            element={<AfricanPgCredentialPage />}
          />
          <Route path="website/header" element={<HeaderPage />} />
          <Route path="website-pages" element={<WebsitePagesPage />} />
          <Route
            path="website-pages/custom-pages/create"
            element={<AddNewPage />}
          />
          <Route
            path="website-pages/custom-pages/edit/:id"
            element={<AddNewPage />}
          />
          <Route path="website-footer" element={<FooterPage />} />
          <Route path="website/appearance" element={<AppearancesPage />} />
          <Route path="general-setting" element={<GeneralSettingPage />} />
          <Route path="activation" element={<FeaturesActivationPage />} />
          <Route path="staffs" element={<AllStaffsPage />} />
          <Route path="staffs/edit/:id" element={<EditStaff />} />
          <Route path="/admin/staffs/create" element={<StaffInformation />} />
          <Route path="roles" element={<StaffPermissionPage />} />
          <Route path="roles/edit/:id" element={<EditRole />} />
          {/* <Route path="/admin/roles/create" element={<RoleInformation />} /> */}
          <Route path="/admin/roles/create" element={<AddRole />} />
          <Route path="languages" element={<LanguagesPage />} />
          <Route path="languages/create" element={<AddNewLanguagePage />} />
          <Route
            path="languages/translation"
            element={<LanguageTranslationPage />}
          />
          <Route
            path="languages/app-translation"
            element={<AppTranslationPage />}
          />
          <Route path="languages/edit/:id" element={<LanguageEditPage />} />
          <Route path="currency" element={<CurrencyPage />} />
          <Route path="country" element={<Country />} />
          <Route path="currency/create" element={<AddNewCurrency />} />
          <Route path="currency/edit/:id" element={<EditCurrency />} />

          <Route path="system/update" element={<SystemUpdatePage />} />
          <Route path="system/server-status" element={<ServerStatusPage />} />
          <Route path="payment-method" element={<PaymentsMethodPage />} />
          <Route
            path="order-configuration"
            element={<OrderConfigurationPage />}
          />
          <Route
            path="file_system"
            element={<FileSystemCacheConfigurationPage />}
          />
          <Route path="pick_up_points" element={<PickupPointsPage />} />
          <Route path="pick_up_points/edit/:id" element={<EditPickUpPoint />} />

          <Route path="pick_up_points/create" element={<AddnewPickupPoint />} />
          <Route path="smtp-settings" element={<SmtpSettingsPage />} />
          <Route path="facebook-chat" element={<FacebookChatPage />} />
          <Route path="facebook-comment" element={<FacebookCommentPage />} />
          <Route path="google-analytics" element={<AnalyticalPage />} />
          <Route path="google-recaptcha" element={<GoogleRecaptchaPage />} />
          <Route path="google-map" element={<GoogleMapPage />} />
          <Route path="google-firebase" element={<GoogleFirebasePage />} />
          <Route
            path="shipping_configuration"
            element={<ShippingConfigurationPage />}
          />
          <Route path="countries" element={<ShippingCountriesPage />} />
          <Route path="states" element={<ShippingStatePage />} />
          <Route path="cities" element={<ShippingCitiesPage />} />
          <Route path="zones" element={<ShippingZonesPage />} />
          <Route path="carriers" element={<ShippingCarrierPage />} />

          <Route path="categories" element={<CategoriesPageAdmin />} />
          <Route path="industry" element={<IndustryMaster />} />
          <Route
            path="industry/create_industryMaster"
            element={<IndustryCreate />}
          />
          <Route
            path="industry/create_industryMaster/edit/:id"
            element={<IndustryCreate />}
          />
          <Route path="categories/create" element={<AddnewCategories />} />
          <Route path="categories/edit/:id" element={<AddnewCategories />} />

          {/* junaid routes */}

          <Route path="seller" element={<AllSellerPage />} />
          <Route
            path="seller/detail-fillup/:id"
            element={<SellerFillupForm />}
          />

          <Route path="add-seller-product" element={<AddNewProductsPage />} />
          <Route path="seller/form" element={<SellerAddEditForm />} />
          <Route path="seller/edit/:id" element={<SellerAddEditForm />} />
          <Route path="seller/detail/:id" element={<SellerDetail />} />

          <Route path="sms-templates" element={<SmsTemplatesPage />} />
          <Route path="sms-list" element={<SmsList />} />
          <Route path="sms-list/create" element={<SmsForm />} />
          <Route path="sms-list/edit/:id" element={<SmsForm />} />

          <Route path="profile" element={<Profile />} />
          <Route path="tracking-order" element={<TrackingOrderPage />} />
          <Route path="tracking-order/:val" element={<TrackingOrderPage />} />
          <Route path="assign_order" element={<AssignOrder />} />
          <Route path="profilePickup" element={<PickupProfile />} />

          <Route path="add_popup" element={<AddPopups />} />
          <Route path="list_popup/edit_popup/:id" element={<AddPopups />} />
          <Route path="list_popup" element={<ListPopups />} />

          {/* custom_fields AAP */}
          <Route path="custom_fields" element={<CustomFelds />} />
          <Route
            path="custom_fields/custom_fields_add"
            element={<Custom_fields_add />}
          />

          <Route path="training" element={<Trainings />}>
            <Route path="" element={<Trainingprograms />} />
            <Route path="t-libraries" element={<Traininglibraries />} />
            <Route path="t-result" element={<Trainingresults />} />
          </Route>
          <Route path="libraries-add" element={<TLAddB />} />
          {/* <Route path="edit" element={<EditTL />} /> */}
          <Route path="all-tasks" element={<AllTaskS />} />
          <Route path="new-button" element={<NewButton />} />
          <Route path="to-schedule" element={<Toschedule />} />
          <Route path="to-invoice" element={<Toinvoice />} />
          <Route path="my-tasks" element={<MyTaskS />} />
          <Route path="by-user" element={<Byuser />} />
          <Route path="tasks-analysis" element={<TasksAnalysis />} />
          <Route path="barchart-analysis" element={<BarchartA />} />

          <Route path="contract" element={<ContractSV />} />
          <Route path="new-contract" element={<NewContracts />} />
          <Route path="dependant" element={<DependantS />} />

          <Route path="sales" element={<SAles />} />
          <Route path="product" element={<PRoduct />} />
          <Route path="point-of-sale" element={<Pointofsale />} />
          <Route path="rental" element={<REntal />} />
          <Route path="subscrip" element={<Subscrip />} />
          <Route path="salesperson" element={<Salesperson />} />
          <Route path="lead-crm" element={<LeadsCRM />} />
          <Route path="pipeline" element={<PipeLine />} />
          <Route path="accounting" element={<Account />} />
          <Route path="invoicing" element={<Invoice />} />
          <Route path="benchmark" element={<BenchMark />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="purchase" element={<Purchas />} />
          <Route path="venders" element={<Vender />} />
          <Route path="inventory" element={<Inventoryof />} />
          <Route path="inventory-flow" element={<Inventoryfl />} />

          {/* <Route path="task-project-dash" element={<ProjectDashBord />} /> */}
          <Route path="report-exl" element={<ReportExl />} />
          <Route path="report-exl2s" element={<ReportEx2 />} />
          <Route path="fareenas" element={<Fareenas />} />

          <Route path="new-dashboard" element={<Odoo />} />

          <Route path="system_settings" element={<SystemSettingsPage />} />
          <Route path="add_printer" element={<AddPrinterPage />} />
          <Route path="list_pop" element={<ListPopUpPage />} />
          <Route path="add-pop-up" element={<AddPopUp />} />
          <Route path="email_templates" element={<EmailTempletePage />} />
          <Route path="offical-sell" element={<OfficialSalePage />} />
          <Route path="pod-list" element={<PodListPage />} />
          <Route path="booking-list" element={<BookingListPage />} />
          <Route path="booking-entry" element={<BookingEntryPage />} />
          <Route path="menifest-list" element={<ManiListPage />} />
          <Route path="menifest-entry" element={<ManifestPage />} />
          <Route path="delivery-run-list" element={<DeliveryRunListPage />} />
          <Route path="delivery-run-sheet" element={<DeliveryRunSheetPage />} />

          <Route path="list_quotation" element={<ListQuatation />} />
          <Route path="list-vtech-quotation" element={<ListVtechQuotation />} />
          <Route path="add_quotation" element={<Add_quotation />} />
          <Route path="add-vtech-quotation" element={<AddVtechQuotation />} />

          <Route path="add_member" element={<EtgAddMember />} />
          <Route path="list_members" element={<ListEtgMember />} />

          <Route path="delivery-boys" element={<AllDeliveryBoys />} />
          <Route
            path="/admin/delivery-boys/create"
            element={<AddNewDeliveryBoy />}
          />
          <Route
            path="/admin/delivery-boys/edit/:id"
            element={<AddNewDeliveryBoy />}
          />
          <Route
            path="payment-history"
            element={<DeliveryBoyPaymentHistory />}
          />
          <Route
            path="delivery-collection-list"
            element={<DeliveryCollectionList />}
          />
          <Route
            path="delivery-cancel-request"
            element={<DeliveryBoyCancelRequest />}
          />
          <Route
            path="delivery-payment-configuration"
            element={<DeliveryBoyConfiguration />}
          />
          <Route path="delivery-boy-status" element={<DeliveryBoyStatus />} />

          <Route path="all/reviews" element={<AllReviewsProducts />} />
          <Route path="all/question" element={<AllQuestion />} />

          <Route path="seller_packages_list" element={<ListParchaseList />} />
          <Route
            path="seller_packages_purchase_list"
            element={<Seller_packages_purchase_list />}
          />
          <Route
            path="socialMedia-credential"
            element={<SocialMediaCredentail />}
          />

          <Route path="input_purchase_tax_report" element={<InputPurchase />} />
          <Route path="output_sale_tax_report" element={<OutputPurchase />} />

          <Route path="add-pos" element={<AddPos />} />

          <Route path="add-stock-transfer" element={<AddStock />} />
          <Route path="list-stock-transfer" element={<ListStock />} />
          <Route path="add-stock-adjustment" element={<AddAdjustments />} />
          <Route path="list-stock-adjustment" element={<ListAdjustment />} />

          <Route
            path="products/all/print_barcodes/:id"
            element={<PrintBarCode />}
          />

          <Route
            path="products/all/print_barcodes/:id"
            element={<PrintBarCode />}
          />

          {/* {zilani code} */}
          <Route
            path="coast-centre-create"
            element={<CreateCostCentrePage />}
          />
          <Route path="cost-centre" element={<CostCentreListPage />} />
          <Route path="cost-centre/edit/:id" element={<EditCostCentrePage />} />
          <Route
            path="coast-centre-category-create"
            element={<CreateCostCentreCategorypage />}
          />
          <Route
            path="coast-centre-category"
            element={<ListCostCentreCategoryPage />}
          />
          <Route
            path="coast-centre-category/edit/:id"
            element={<EditCostCentreCategoryPage />}
          />
          <Route path="budget-create" element={<CreateBudgetPage />} />
          <Route path="budgets" element={<BudgetListpage />} />
          <Route path="budgets/edit/:id" element={<EditBudgetPage />} />
          <Route
            path="vouchertype/create"
            element={<CreateVoucherTypePage />}
          />
          <Route path="vouchertypes" element={<ListVoucherTypePage />} />
          <Route
            path="vouchertypes/edit/:id"
            element={<EditVoucherTypePage />}
          />

          {/* <Route path="add-newasset-category" element={<AddAssetCategories />} />
          <Route path="asset-category" element={<AssetCategorey />} />
          <Route path="asset-category/edit/:id" element={<EditAssetCategory />} />
          <Route path="asset-category-type-view" element={<AssetCategoryDetails />} />
          <Route path="asset-category-type-view/details/:id" element={<AssetCategoryDetails />} />
          <Route path="add-asset-category" element={<AssetAddCategory />} />
          <Route path="add-asset-sub-category" element={<AddSubCategories />} />
          <Route path="asset-sub-category" element={<AssetSubCatecories />} />
          <Route path="asset-sub-category" element={<AssetSubCatecories />} />
          <Route path="asset-sub-category/edit/:id" element={<EditAssetsSubCategory />} />
          <Route path="asset-sub-category-type-view/details/:id" element={<DetailsSubCategories />} />
          <Route path="asset-comments" element={<AssetComments />} />
          <Route path="asset-status" element={<AssetStatus />} />
          <Route path="department" element={<Department />} />
          <Route path="sub-department" element={<SubDepartMent />} />
          <Route path="designation" element={<Desigination />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route path="view-department/details/:id" element={<DetailsDepartment />} />
          <Route path="list-delivery-challan" element={<DeliveryChalanReportPage />} />
          <Route path="add-delivery-challan" element={<AddDeliveryChalanPage />} />

          <Route path="asset-request" element={<AssetRequest />} />
          <Route path="asset-issue" element={<AssetIssue />} />

          <Route path="reports-status" element={<ReportAssetStatus />} />
          <Route path="reports-allocations" element={<ReportAllocation />} /> */}

          <Route
            path="/admin/assets-dashboard/newasset-category"
            element={<AssetsList />}
          />
          <Route path="allocate/:id" element={<Allocate />} />
          <Route path="asset/details/:id" element={<DetailsAssets />} />
          <Route path="asset/edit/:id" element={<EditAssets />} />
          <Route
            path="add-newasset-category"
            element={<AddAssetCategories />}
          />
          <Route path="asset-category" element={<AssetCategorey />} />
          <Route path="my-assets" element={<MyAssets />} />
          <Route path="add-assets-request" element={<AddAssestsRequest />} />
          <Route
            path="my-assets-request-list"
            element={<MyAssetsRequestList />}
          />
          <Route path="assets-request-list" element={<AssestsRequestList />} />
          <Route
            path="assets-request-list/edit/:id"
            element={<EditAssetsRequestList />}
          />
          <Route
            path="asset-category-type-view/details/:id"
            element={<AssetCategoryDetails />}
          />
          <Route path="add-asset-category" element={<AssetAddCategory />} />
          <Route
            path="asset-category/edit/:id"
            element={<EditAssetCategory />}
          />
          <Route path="asset-sub-category" element={<AssetSubCatecories />} />
          <Route path="add-asset-sub-category" element={<AddSubCategories />} />
          <Route
            path="asset-sub-category/edit/:id"
            element={<EditAssetsSubCategory />}
          />
          <Route
            path="asset-sub-category-type-view/details/:id"
            element={<DetailsSubCategories />}
          />
          <Route path="asset-comments" element={<AssetComments />} />
          <Route path="add-asset-comments" element={<AssetsAddComment />} />
          <Route path="asset-status" element={<AssetStatus />} />
          <Route path="add-asset-status" element={<AddAssetsStatus />} />
          <Route path="asset-status/edit/:id" element={<EditAssetsStatus />} />
          <Route
            path="asset-status/details/:id"
            element={<DetailsAssetsStatus />}
          />
          <Route path="department" element={<Department />} />
          <Route path="add-department" element={<AddDepartment />} />
          <Route
            path="view-department/details/:id"
            element={<DetailsDepartment />}
          />
          <Route path="department/edit/:id" element={<EditDepartment />} />
          <Route path="sub-department" element={<SubDepartMent />} />
          <Route path="add-sub-department" element={<AddSubDepartment />} />
          <Route
            path="sub-department/edit/:id"
            element={<EditSubDepartment />}
          />
          <Route
            path="view-sub-department/details/:id"
            element={<DetailsSubDepartment />}
          />
          <Route path="designation" element={<Desigination />} />
          <Route path="add-designation" element={<AddDesigination />} />
          <Route path="designation/edit/:id" element={<EditDesgination />} />
          <Route
            path="designation/details/:id"
            element={<DetailsDesgination />}
          />
          <Route
            path="list-delivery-challan"
            element={<DeliveryChalanReportPage />}
          />
          <Route
            path="add-delivery-challan"
            element={<AddDeliveryChalanPage />}
          />
          <Route path="reports-status" element={<ReportAssetStatus />} />
          <Route path="reports-allocations" element={<ReportAllocation />} />
          <Route
            path="assets-dashboard"
            element={<AssetsDashboardAdminComp />}
          />
          <Route path="add-ticket" element={<AddTicket />} />
          <Route path="complaint-type" element={<ComplaintType />} />
          <Route
            path="complaint-type/edit/:id"
            element={<EditComplaintType />}
          />
          <Route path="complaint-nature" element={<ComplaintNature />} />
          <Route
            path="complaint-nature/edit/:id"
            element={<EditComplaintNature />}
          />
          <Route path="staff-ticket-list" element={<StaffTicketList />} />
          <Route
            path="staff-ticket-list/edit/:id"
            element={<EditStaffTicket />}
          />
          <Route
            path="employees-complaints-dashboard"
            element={<ComplaintsDashboardPages />}
          />
          <Route
            path="view/complaints-detail/:id"
            element={<ComplaintDetail />}
          />

          {/* {shoaib code} */}

          {/* {Nizam Routes start} */}
          <Route path="etsy-account-list" element={<EtsyAccList />} />
          <Route path="new-etsy-account" element={<NewEtsyAccount />} />
          <Route path="etsy-general-settings" element={<EtsySettings />} />

          <Route path="delivery-time-settings" element={<DeliverySettings />} />
          <Route path="marketplace-pre-order" element={<MarketPlacePre />} />
          <Route path="marketplace-event-ticket" element={<MarketTicket />} />
          <Route
            path="marketplace-validator"
            element={<MarketplaceValidator />}
          />

          <Route path="job-descriptions" element={<JobDesc />} />
          <Route path="job-group" element={<JobGroup />} />
          <Route path="job-departments" element={<JobDepartment />} />

          <Route path="group-management" element={<GroupManagement />} />
          <Route path="import-excel" element={<ImportExcel />} />
          <Route path="view-job" element={<ViewJob />} />
          <Route path="org-chart" element={<ORGChart />} />
          <Route path="onboarding" element={<Onboardings />} />
          <Route path="hr-records" element={<Hrrecords />} />
          <Route path="new-staff-members" element={<NewStaffMember />} />
          <Route path="import-from-excel" element={<ImportFromExcel />} />
          <Route path="view-hr-records" element={<ViewRecords />} />

          {/* {my new Routes end} */}
          {/* <Route path="add_privacyPolicy" element={<ViewRecords />} /> */}

          {/* {Shhaz Routes start} */}
          <Route path="drop-ship" element={<Dropships />} />
          <Route path="dropship-order" element={<DropshipOrders />} />
          <Route path="new-warehouse" element={<NewWarehouse />} />
          <Route
            path="manage-shopping-rules"
            element={<ManageShoppingRules />}
          />
          <Route path="add-new-warehouse" element={<AddNewShoppingRule />} />
          <Route
            path="manage-dropship-product-upload"
            element={<ManageDropshipProductUpload />}
          />
          <Route
            path="run-dropship-product-profile"
            element={<RunDropshipProductProfile />}
          />
          <Route
            path="dropship-dataflow-profile"
            element={<DropshipDataFlowProfile />}
          />
          <Route path="add-new-calls" element={<Addnewcalls />} />
          <Route path="asset-request" element={<AssetRequest />} />
          <Route path="call-centre-dashboard" element={<CallOverView />} />
          <Route path="AddAgreement" element={<AddAgreement />} />
          <Route path="add-v-tech-purchase" element={<VtechPurchase />} />
          <Route path="list-v-tech-purchase" element={<ListvTechPurchase />} />
          <Route
            path="list-v-tech-Transfer-stock"
            element={<ListVPurchaseStock />}
          />
          <Route path="estimate-sales" element={<EstimateSales />} />
          <Route path="new-estimate" element={<NewEstimate />} />
          <Route path="task-crm" element={<Task />} />
          <Route path="task-overview" element={<TaskOverview />} />
          <Route path="dashboard-crm" element={<Dashboard />} />
          <Route path="reminder-dash" element={<RecruitmentDashNew />} />
          <Route path="project" element={<Project />} />
          <Route path="add-new-project" element={<AddNewProject />} />
          <Route path="project/project-view/:id" element={<ProjectView />} />
          <Route path="accounts" element={<ChartOfAccounts />} />
          <Route path="accounts-group" element={<ChartOfAccountGroup />} />
          <Route path="groups" element={<Groups />} />
          <Route path="add-voucher" element={<AddVochers />} />
          <Route path="list-voucher" element={<ListVochers />} />
          <Route path="add-ledgers" element={<Ladgers />} />
          <Route path="reports-ledgers" element={<ReportsLedgers />} />
          <Route path="ledgers-edit/:id" element={<Ladgers />} />
          <Route path="list-ledgers" element={<ListsLegers />} />
          <Route path="add-group" element={<AddCompany />} />
          <Route path="group_edit/:id" element={<AddCompany />} />
          <Route path="list-group" element={<ListGroups />} />
          <Route path="reports-group" element={<ReportsGroup />} />
          <Route path="account-dashbord" element={<DashboarD />} />
          <Route path="report" element={<Report />} />
          <Route path="add-company" element={<AddCompanys />} />
          <Route path="company_edit/:id" element={<AddCompanys />} />
          <Route path="list-company" element={<ListCompany />} />
          <Route path="creat-company" element={<CreateCompany />} />
          <Route path="show-company" element={<AllCompanyList />} />
          <Route
            path="/admin/rp_balance_report_sheet"
            element={<Rpblancesheetcomprasion />}
          />
          <Route path="day_book" element={<DayBooks str="Day" />} />
          <Route path="cash_book" element={<DayBooks str="Cash" />} />
          <Route path="bank_book" element={<DayBooks str="Bank" />} />

          <Route path="routings" element={<Routings />} />
          <Route path="work-center" element={<WorkCenter />} />
          <Route path="manufacturing-order" element={<ManufacturingOrder />} />
          <Route path="work-order" element={<WorkOrder />} />
          <Route path="view-work-order" element={<ViewWorkOrder />} />

          <Route path="crm-1" element={<CRM1 />} />
          <Route path="Purchase" element={<PurchasoDo />} />
          <Route path="req-qua" element={<ReqForQuatation />} />
          <Route path="draft" element={<CreateDraftInvoice />} />
          <Route path="email-mark" element={<EmailMarketing />} />
          <Route path="email-new" element={<NewMail />} />

          {/* Mustafa Works */}
          <Route
            path="special-seller-list"
            element={<SpecialSellerListPage />}
          />
          <Route path="reasonMaster" element={<ReasionMaster />} />
          <Route
            path="special-seller-list/:id"
            element={<SpecialSellerListPage />}
          />
          <Route path="division" element={<Division_and_districtAdd />} />
          <Route
            path="division/edit/:id"
            element={<Division_and_districtAdd />}
          />
          <Route path="district" element={<Districs />} />
          <Route path="district/edit/:id" element={<Districs />} />
          <Route path="application_track" element={<Application_track />} />
          <Route
            path="special-seller/details/:id"
            element={<SpecialSellerDetailsPage />}
          />
          <Route path="contact_mail_info" element={<ContactMailInfo />} />

          <Route path="ShippingCostArea" element={<ShippingCostArea />} />
          <Route path="ShippingCostSetting" element={<ShippingSetting />} />

          <Route path="contact_message" element={<ContactMessage />} />

          {/* by Sajid */}

          <Route path="settingmanufacture" element={<SettingManfucture />}>
            <Route path="" element={<WorkingHours />} />
            <Route path="unit-categories" element={<UnitOfMeasureCat />} />
            <Route path="unit-measure" element={<UnitOfMeasure />} />
            <Route path="genral" element={<GeneralSettings />} />
          </Route>
          <Route path="add-working-hours" element={<AddWorkingHours />} />

          <Route path="setting" element={<Setting />}>
            <Route path="" element={<Generals />} />
            <Route path="banking" element={<Banking />} />
          </Route>
          <Route path="add-banking" element={<AddBanking />} />

          {/* {nazim Routes end} */}
          <Route path="sales-tax-report" element={<SalesTaxRepors />} />
          <Route path="purchase-tax-report" element={<PurchaseTaxReport />} />
          <Route
            path="supplier-items-report"
            element={<SupplierItemsReport />}
          />
          <Route path="sales-report" element={<SalesReports />} />
          <Route path="sales-return-report" element={<SalesReturnReport />} />
          <Route path="seller-point-return" element={<SellerPointsReturn />} />
          <Route path="purchase-report" element={<PurchaseReport />} />
          <Route
            path="purchase-return-report"
            element={<PurchaseReturnReport />}
          />
          <Route path="expense-report" element={<ExpenseReport />} />
          <Route path="stock-report" element={<StockReportV />} />
          <Route path="sales-item-report" element={<SaleItemReport />} />
          <Route path="return-item-report" element={<ReturnItemsReport />} />

          <Route path="to-do-list" element={<ToDoLists />} />
          <Route path="to-do-setting" element={<MyTodoSetting />} />
          {/* <Route path="subscriptions" element={<Subscription />} /> */}
          {/* <Route path="new-subscriptions" element={<NewSubscriptions />} />
          <Route path="profit-and-loss-report" element={<Profit />} />
          <Route path="sales-and-payment-report" element={<Salespayment />} />
          <Route path="customer-orders" element={<Customerorder />} />
          <Route path="gstr1-report" element={<GSTR />} />
          <Route path="gstr2-report" element={<GSTR2 />} /> */}

          <Route path="bills-of-material" element={<BillsofMaterials />} />
          <Route
            path="view-billsofmaterials"
            element={<ViewBillsofMaterials />}
          />

          <Route path="sales-gst-report" element={<SalesGstreport />} />
          <Route path="Purchase-gst-report" element={<PurchaseGstreport />} />
          <Route
            path="sales-summary-report"
            element={<SalesSummaryreports />}
          />
          <Route
            path="stock-transfer-report"
            element={<StockTransferreports />}
          />
          <Route
            path="sales-return-payments-report"
            element={<SalesReturnPaymentsreports />}
          />
          <Route
            path="sales-payments-report"
            element={<SalesPaymentsreports />}
          />
          <Route
            path="purchase-payments-report"
            element={<PurchasePaymentsreports />}
          />

          <Route path="lead-filters" element={<Leadfilter />} />
          <Route path="lead-filters-template" element={<LeadFilters />} />
          <Route path="leads" element={<Lead />} />
          <Route path="customer" element={<Customer />} />
          <Route path="new-customers" element={<NewCustomers />} />
          <Route path="import-customers" element={<ImportCustomers />} />

          {/* {saaz route start} */}
          <Route path="knowledge-base-crm" element={<KnowledgeBase />} />
          <Route path="add-new-artical" element={<AddNewArtical />} />
          <Route path="group-crm" element={<Group />} />
          <Route path="add-prices" element={<AddPrice />} />
          <Route path="import-leads" element={<ImportLeads />} />
          <Route path="reminder-crm" element={<Reminder />} />
          <Route path="proposal-sales" element={<Proposal />} />
          <Route path="new-proposal-crm" element={<NewProposal />} />

          <Route
            path="amazon-account-info"
            element={<AmazonAccountListPage />}
          />
          <Route
            path="amazon-account-info/account-info"
            element={<AmazonAccountInformation />}
          />
          <Route
            path="amazon-account-info/add-amazon-account"
            element={<AddAmazonAccount />}
          />

          <Route path="new-amazon-account" element={<NewAmazonAccountPage />} />
          <Route
            path="new-amazon-account/new-amazon-ac-Info"
            element={<NewAmazonAcInfo />}
          />
          <Route
            path="new-amazon-account/new-amazon-ac-edit"
            element={<NewAmazonAcEdit />}
          />

          <Route path="pricing-rules" element={<PricingRulesPage />} />
          <Route
            path="pricing-rules/new-price-rule"
            element={<AddPricingRules />}
          />
          <Route
            path="pricing-rules/edit-price-rule"
            element={<EditPricingRule />}
          />

          <Route path="category-map-export" element={<CategoryMapPage />} />
          <Route path="v-tech-rent-product" element={<VtechRentProductAdd />} />
          <Route path="rentProductList" element={<RentProductList />} />
          <Route
            path="add-v-tech-Transfer-stock"
            element={<AddVtechStockac />}
          />
          <Route
            path="category-map-export/create-mapping"
            element={<CreateMap />}
          />

          {/* junaid crm pages */}
          {/* junaid crm pages */}
          <Route path="staffs-new" element={<AddUser />} />
          {/* {zilani route } */}

          <Route path="color-stone" element={<ColorStonePage />} />
          <Route
            path="color-stone/edit/:uid"
            element={<EditColorStonepage />}
          />
          <Route path="add-color-stone" element={<AddColorStone />} />
          <Route path="add-material" element={<AddMaterialJewelPage />} />
          <Route path="list-material" element={<ListMaterialJewelPage />} />
          <Route
            path="list-material/edit/:uid"
            element={<EditMaterialJewelPage />}
          />
          <Route path="add-gemstone" element={<AddGemstonePage />} />
          <Route path="list-gemstone" element={<ListGemstonePage />} />
          <Route
            path="list-gemstone/edit/:uid"
            element={<EditGemStonePage />}
          />
          <Route path="add-theme" element={<AddThemeJewelPage />} />
          <Route path="list-theme" element={<ListThemePage />} />
          <Route path="list-theme/edit/:uid" element={<EditThemeJewelPage />} />

          <Route
            path="add-labour-charge-type"
            element={<AddLabourChargeTypePage />}
          />
          <Route path="labour-charge-type" element={<LabourChangeTypePage />} />
          <Route
            path="labour-charge-type/edit/:uid"
            element={<EditLabourChargeTypePage />}
          />
          <Route path="add-labour-charge" element={<AddLabourChargePage />} />
          <Route path="labour-charge" element={<LabourChargePage />} />
          <Route
            path="labour-charge/edit/:uid"
            element={<EditLabourChargePage />}
          />
          <Route path="price" element={<PricePage />} />
          <Route path="price/edit/:uid" element={<EditPricePage />} />
          <Route path="add-price" element={<AddPrice />} />
          <Route path="shop-for-modules" element={<ShopForModulePage />} />
          <Route
            path="shop-for-modules/edit/:uid"
            element={<EditShopForModulePage />}
          />
          <Route path="add-shop-for-module" element={<AddShopForModule />} />
          <Route path="occasion" element={<OccasionPage />} />
          <Route path="occasion/edit/:uid" element={<EditOccassionPage />} />
          <Route path="add-occasion" element={<AddOccasion />} />
          <Route path="ring-size" element={<RingSizePage />} />
          <Route path="ring-size/edit/:uid" element={<EditRingSizePage />} />
          <Route path="add-ring-size" element={<AddRingSize />} />
          <Route path="couponn" element={<CouponnPage />} />
          <Route path="add-couponn" element={<AddCoupan />} />
          <Route
            path="jwellery/categoryType"
            element={<CategoryTypeJwellsPage />}
          />
          <Route
            path="jwellery/categoryType/edit/:uid"
            element={<EditCategoryTypeJwellsPage />}
          />
          <Route
            path="add-jwellery/categoryType"
            element={<AddCategoryTypeJwellsPage />}
          />

          <Route path="add-metal-purity" element={<AddMetalType />} />
          <Route path="metal-purity" element={<MetalPurityPage />} />
          <Route path="metal-purity/edit/:uid" element={<EditMetalPurity />} />
          <Route path="add-metal-weight" element={<AddMetalWeightPage />} />
          <Route path="metal-weight" element={<MetalWeightPage />} />
          <Route
            path="metal-weight/edit/:uid"
            element={<EditMetalWeightPage />}
          />
          <Route path="add-diamond-color" element={<AddDiamondColorPage />} />
          <Route
            path="add-diamond-clarity"
            element={<AddDiamondClarityPage />}
          />
          <Route path="list-diamond-clarity" element={<ListDiamondClarity />} />
          <Route
            path="list-diamond-clarity/edit/:uid"
            element={<EditDiamondClarity />}
          />
          <Route
            path="add-diamond-quality"
            element={<AddDiamondQualityPage />}
          />
          <Route path="list-diamond-quality" element={<ListDiamondQuality />} />
          <Route
            path="list-diamond-quality/edit/:uid"
            element={<EditDiamondQuality />}
          />
          <Route path="add-diamond-shape" element={<AddDiamondShapePage />} />
          <Route path="list-diamond-shape" element={<ListDiamondShape />} />
          <Route
            path="list-diamond-shape/edit/:uid"
            element={<EditDiamondShape />}
          />
          <Route path="add-diamond-Sieves" element={<AddDiamondSievesPage />} />
          <Route path="list-diamond-Sieves" element={<ListDiamondShieves />} />
          <Route
            path="list-diamond-Sieves/edit/:uid"
            element={<EditDiamondSieves />}
          />
          <Route
            path="add-category-sequence"
            element={<AddCategorySequencePage />}
          />
          <Route path="add-style" element={<AddStyleManagementPage />} />
          <Route path="list-style" element={<ListStyleManagementPage />} />
          <Route
            path="list-style/edit/:uid"
            element={<EditStyleManagementPage />}
          />
          <Route
            path="add-collection"
            element={<AddCollectionManagementPage />}
          />
          <Route
            path="list-collection"
            element={<ListCollectionManagementPage />}
          />
          <Route
            path="list-collection/edit/:uid"
            element={<EditCollectionManagementpage />}
          />
          <Route path="add-metal-type" element={<AddMetalTypePage />} />
          <Route path="metal-type" element={<MetalTypePage />} />
          <Route path="metal-type/edit/:uid" element={<EditMetalTypePage />} />

          {/* {29-12-23} */}
          <Route path="metal-rate/add" element={<AddMetalRateCardPage />} />
          <Route path="metal-rate" element={<MeatlRatecardPage />} />
          <Route
            path="metal-rate/edit/:id"
            element={<EditMetalRateCardPage />}
          />
          <Route path="diamond-rate/add" element={<AddDiamondRateCardPage />} />
          <Route path="diamond-rate" element={<DiamondRateCardPage />} />
          <Route
            path="diamond-rate/edit/:id"
            element={<EditDiamondRateCardPage />}
          />
          <Route
            path="labourCharge-rate/add"
            element={<AddLabourChargeRateCardPage />}
          />
          <Route
            path="labourCharge-rate"
            element={<LabourChargeRateCardPage />}
          />
          <Route
            path="labourCharge-rate/edit/:id"
            element={<EditLabourChargeRateCardPage />}
          />
          <Route
            path="colorStone-rate/add"
            element={<AddColorStoneRateCardPage />}
          />
          <Route path="colorStone-rate" element={<ColorStonerateCardPage />} />
          <Route
            path="colorStone-rate/edit/:id"
            element={<EditColorStoneRateCardPage />}
          />

          <Route
            path="add-jwellery-produt"
            element={<AddJwelleryProductPage222 />}
          />
          <Route
            path="list-jwellery-products"
            element={<ListJwelleryProductsPage />}
          />
          <Route
            path="list-jwellery-products/edit/:uid"
            element={<EditJwelleryProductsPage />}
          />

          <Route
            path="add-productWear-tag"
            element={<AddProductWearTagPage />}
          />
          <Route path="productWear-tag" element={<ProductWearTagPage />} />
          <Route
            path="productWear-tag/edit/:uid"
            element={<EditProductWearTagPage />}
          />
          <Route
            path="add-productLook-tag"
            element={<AddProductLookTagPage />}
          />
          <Route path="productLook-tag" element={<ProductLookTagPage />} />
          <Route
            path="productLook-tag/edit/:uid"
            element={<EditProductLookTagPage />}
          />
          <Route path="add-product-tag" element={<AddProductTagPage />} />
          <Route path="product-tag" element={<ProductTagPage />} />
          <Route
            path="product-tag/edit/:uid"
            element={<EditProductTagPage />}
          />
          <Route path="add-size-jwells" element={<AddSizeJwellsPage />} />
          <Route path="size-jwells" element={<SizeJwellsPage />} />
          <Route
            path="size-jwells/edit/:uid"
            element={<EditSizeJwellsPage />}
          />

          <Route
            path="add-metal-priceType"
            element={<AddMetalPriceTypePage />}
          />
          <Route path="metal-priceType" element={<MetalPriceTypePage />} />
          <Route
            path="metal-priceType/edit/:uid"
            element={<EditMetalPriceTypePage />}
          />

          {/* <Route path="add-celebrity" element={<AddCelebritiesPage />} /> */}
          <Route path="celebrity/create" element={<CreateCelebrityComp />} />
          <Route path="list-celebrity" element={<ListCelebritiesPage />} />
          <Route
            path="list-celebrity/edit/:id"
            element={<UpdateCelebrityPage />}
          />
          <Route
            path="add-celebrity-type"
            element={<AddCelebritiesTypePage />}
          />
          <Route
            path="list-general-celebrity"
            element={<GeneralCelebritiesListPage />}
          />
          <Route
            path="add-celebrity-category"
            element={<AddCelebrityCategoryPage />}
          />
          <Route
            path="list-celebrity-category"
            element={<ListCelebrityCategoryPage />}
          />
          <Route
            path="add-celebrity-package"
            element={<AddCelebritiesPackagePage />}
          />
          <Route
            path="list-celebrity-package"
            element={<ListCelebrityPackagePage />}
          />
          <Route
            path="list-celebrity-package/edit/:id"
            element={<EditCelebrityPackagePage />}
          />
          <Route
            path="celebrity-dashboard"
            element={<CelebrityGoogleDashboardPage />}
          />

          <Route
            path="list-chiragFoundation-orders"
            element={<ListChiragFoundationsOrders />}
          />
          <Route
            path="list-chiragFoundation-customers"
            element={<ListChiragFoundationCustomersPage />}
          />
          <Route path="indexGroup/create" element={<AddIndexGroupPage />} />
          <Route path="list-indexGroup" element={<ListIndexGroupPage />} />
          <Route
            path="list-indexGroup/edit/:id"
            element={<UpdateIndexGroupPage />}
          />
          <Route path="priceRange/create" element={<AddPriceRangePage />} />
          <Route path="list-priceRange" element={<ListPriceRangePage />} />
          <Route
            path="list-priceRange/edit/:id"
            element={<UpdatePriceRangePage />}
          />
          <Route path="grade/create" element={<AddGradePage />} />
          <Route path="list-grade" element={<ListGradesPage />} />
          <Route path="list-grade/edit/:id" element={<UpdateGradePage />} />

          {/* <Route path="crmDashboard" element={<NewDashboardCard />} />
          <Route path="crmContacts" element={<Contacts />} /> */}
        </Route>
      </Routes>
      {show && <Footer />}
    </>
  );
}
export default App;
