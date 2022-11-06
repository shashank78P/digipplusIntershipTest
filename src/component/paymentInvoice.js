import { paymentInvoice } from "../store/dataObject"; 

const PaymentInvoice = () =>{
    return(
            <div className="paymentInvoice">
                        {
                            paymentInvoice.map((ele,j)=>{
                                return(
                                    <>{
                                        (!j)? <div key={j}>Payment Date: <h1>{ele.Payment_Date }</h1> Amount Paid: <h1>{ ele.Amount_Paid}</h1></div>
                                        :
                                        <p key={j}>{ele}</p>
                                    }
                                    </>
                            )
                            })
                        }
                    </div>
    )
}

export default PaymentInvoice;