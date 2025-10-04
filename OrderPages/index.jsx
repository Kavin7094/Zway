import { ScrollView, View } from 'react-native';
// import AddressSection from '../old/addressSection';
// import ServiceSection from '../old/serviceSection';
// import DurationSection from '../old/DurationSection';
// import PaymentmethodSection from '../old/paymentMethodSection'
// import ImageAttachmentSection from '../old/ImageAttachmentSection'
// import SubmitionSection from'../old/SubmitionSection'
import "expo-router/entry";
import "../global.css";
import JobDescriptionSession from './JobDescriptionSession';
import MemberSession from './MemberSession';
import CheckoutHeader from './NavigationSession';
import OrderSummarySession from './OrderSummary';
import PaymentSelectionSession from './PaymentSelectionSession';
import ServiceAddressSession from './ServiceAddressSession';
import ServiceSession from './ServiceSession';


const OrderForm = () => {
  return (
    <><View
      showsVerticalScrollIndicator={false} className=' bg-white mb-0 pb-0 '>
      <CheckoutHeader />
    </View><ScrollView className="flex-1 bg-white pt-8 space-y-4">
        <ServiceSession />
        <MemberSession />
        <ServiceAddressSession />
        <JobDescriptionSession />
        <PaymentSelectionSession />
        <OrderSummarySession />
      </ScrollView></>
  );
};

export default OrderForm;
