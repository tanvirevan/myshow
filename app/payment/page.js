import PaymentFrom from "@/components/Paymentpage/PaymentFrom";

export default function PaymentPage() {
  return (
    <section className="flex justify-center">
      <div className="bg-[#242526] p-6 rounded-lg w-1/2 mx-auto my-12">
        <h2 className="font-bold text-xl mb-8 text-white">
          Payment Details
        </h2>
        <PaymentFrom />
      </div>
    </section>
  );
}
