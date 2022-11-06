import SideNav from "./sideNav";
import { sideBarContentOfPaymentPage, totalPayment } from "../store/dataObject";
import OurOwnContext from "../store/createContext";
import NoRecordFound from "./noRecordFound";
import PaymentInvoice from "./paymentInvoice";
import { useContext } from "react";

const MyPayments = () => {
    const dataFromContext = useContext(OurOwnContext)
    function controller(i) {
        switch (i) {
            case 0:
                return (
                    <PaymentInvoice />
                )
            case 1:
                return <NoRecordFound />;
            default:
                return <NoRecordFound />;

        }
    }
    return (
        <>
            <div className="section">
                <SideNav data={sideBarContentOfPaymentPage} page="payment"/>
                <>
                    {
                        controller(dataFromContext.selectedOptionSubOption)
                    }
                </>
                <div className="statement">
                    <div>
                        <h3>Lifetime Earning</h3>
                        <h2>{totalPayment.lifeTimeEarning}</h2>
                    </div>
                    <div>
                        <h3>This Month Earning</h3>
                        <h2>{totalPayment.thisMonthEarning}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPayments;