import React, { useRef } from "react";


const reservationData = {
    guest: {
        guestName: "محمد احمدی",
        guestNumber: "1234567890",
        guestBD: "1404/02/08",
    },
    hotel: {
        hotelName: "هتل تست",
        hotelAddress: "امام خمینی 17",
        reservationDate: "1404/02/06",
    },
    stay: {
        arrivalDate: "1404/02/08",
        arrivalDateDay: "پنجشنبه",
        departureDate: "1404/02/08",
        departureDateDay: "شنبه",
        stayDuration: "2 شب",
        stayType: "سوئیت",
        firstMeal: "ناهار",
        lastMeal: "شام",
        noOfAdults: 2,
        noOfChildren: 1,
    },
    payment: {
        totalAmount: "3,000,000",
        guestPayment: "1,000,000",
        remainingCost: "2,000,000",
    },
    room: {
        roomType: "سوئیت",
        rate: "3,000,000",
    },
    paymentCode: "AB123456",
    notes: "بی‌تفاقمفقن",
    recipient: "احمدی",
};

const ReservationConfirmation = ({ data }) => {
    const formRef = useRef();



    return (
        <div className="bg-gray-400 p-4 max-w-screen min-h-screen " ref={formRef}>
            <div className=" mx-auto w-[576px] h-[750px] shadow-md sm:rounded-lg mt-12 mb-12 bcg-hami ">
                <div className="w-full max-w-4xl mx-auto p-6 text-right leading-relaxed" dir="rtl">

                    <div className="grid grid-cols-3 gap-2 mr-6">
                        <table className="table-auto w-full text-sm">
                            <thead>
                            <tr className="bg-blue-950 text-white text-center" >
                                <th className=" px-2 py-1 rounded-t-lg">مهمان</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-gray-100 text-center rounded-b-lg ">
                                <td className="px-2 py-1 rounded-b-lg">
                                    <div><span className="mt-2"></span>{data.guest.guestName}</div>
                                    <div><span className=""></span>{data.guest.guestNumber}</div>
                                    <div><span className="">متولد:</span> {data.guest.guestBD}</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="grid grid-rows-2 gap-1">


                            <h3 className="text-center text-lg font-bold justify-center pt-2">تاییدیه رزرو</h3>
                            <p className=" border-t border-b-blue-950 text-center text-[12px] justify-center pt-1"> حامی_تیم،رزرو هتل در مشهد با مناسب ترین قیمت</p>

                        </div>



                        <table className="table-auto w-full text-sm">
                            <thead>
                            <tr className="bg-blue-950 text-white text-center" >
                                <th className=" px-2 py-1 rounded-t-lg">هتل</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-gray-100 text-center rounded-b-lg ">
                                <td className="px-2 py-1 rounded-b-lg">
                                    <div><span className="mt-2"></span>{data.hotel.hotelName}</div>
                                    <div><span className=""></span>{data.hotel.hotelAddress}</div>
                                    <div><span className="">تاریخ:</span> {data.hotel.reservationDate}</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>





                    <div className="overflow-x-auto mt-4 mr-6">
                        <table className="table-auto w-full text-sm ">
                            <thead>
                            <tr className="bg-blue-950 text-white text-center">
                                <th className="border-l border-black px-2 py-1 rounded-tr-lg">ورود</th>
                                <th className="border-l border-black px-2 py-1">خروج</th>
                                <th className="border-l border-black px-2 py-1">مدت اقامت</th>
                                <th className="border-l border-black px-2 py-1">نوع اقامت</th>
                                <th className=" px-2 py-1 rounded-tl-lg">نوع اتاق</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-gray-200 text-center" >
                                <td className="border-l border-black px-2 py-1 rounded-br-lg">{data.stay.arrivalDate}
                                    <p> {data.stay.arrivalDateDay}</p>
                                </td>
                                <td className="border-l border-black px-2 py-1">{data.stay.departureDate}
                                    <p> {data.stay.departureDateDay}</p>
                                </td>
                                <td className="border-l border-black px-2 py-1">{data.stay.stayDuration}</td>
                                <td className="border-l border-black px-2 py-1">{data.stay.stayType}</td>
                                <td className="b px-2 py-1 rounded-bl-lg">{data.room.roomType}</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="overflow-x-auto mt-4 mr-6">
                        <table className="table-auto w-full text-sm">
                            <thead>
                            <tr className="bg-blue-950 text-white text-center text-[12px]">

                                <th className="border-l border-black px-2 py-1 rounded-tr-lg">نرخ</th>
                                <th className="border-l border-black px-2 py-1">وعده غذایی اول</th>
                                <th className="border-l border-black px-2 py-1">وعده غذایی آخر</th>
                                <th className="border-l border-black px-2 py-1">نفرات بزرگسال</th>
                                <th className=" px-2 py-1 rounded-tl-lg">نفرات کودک</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-gray-200 text-center" >
                                <td className="border-l border-black px-2 py-1 rounded-br-lg">{data.room.rate}</td>
                                <td className="border-l border-black px-2 py-1">{data.stay.firstMeal}</td>
                                <td className="border-l border-black px-2 py-1">{data.stay.lastMeal}</td>
                                <td className="border-l border-black px-2 py-1">{data.stay.noOfAdults}</td>
                                <td className=" px-2 py-1 rounded-bl-lg">{data.stay.noOfChildren}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="overflow-x-auto mt-4 mr-6">
                        <table className="table-auto w-full text-sm ">
                            <thead>
                            <tr className="bg-blue-950 text-white text-center">
                                <th className="border-l border-black px-2 py-1 rounded-tr-lg">جمع کل</th>
                                <th className="border-l border-black px-2 py-1"> پرداختی مهمان</th>
                                <th className="border-l border-black px-2 py-1">باقیمانده</th>
                                <th className=" px-2 py-1 rounded-tl-lg">کد پیگیری</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-gray-200 text-center" >
                                <td className="border-l border-black px-2 py-1 rounded-br-lg">{data.payment.totalAmount}</td>
                                <td className="border-l border-black px-2 py-1">{data.payment.guestPayment}</td>
                                <td className="border-l border-black px-2 py-1">{data.payment.remainingCost}</td>
                                <td className=" px-2 py-1 rounded-bl-lg">{data.paymentCode}</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="mt-2 text-sm mr-6 mb-2 py-3">
                        <div><span className="font-bold">توضیحات:</span>   {data.notes}</div>
                    </div>


                    <div className=" py-3 text-right mr-6 border-t border-gray-300 ">

                        <div className="text-xs text-gray-600 leading-relaxed text-right">
                            <p>
                                ملاحظات و قوانین:
                            </p>
                            <p>
                                1. طبق قوانین هتل اقامت افراد زیر 18 سال به تنهایی در محل ممنوع
                                است.
                            </p>
                            <p>
                                2.  شماره اتاق و طبقه هنگام ورود به هتل و بر اساس موجودی توسط هتل تعیین میشود.
                            </p>
                            <p>3. تحویل اتاق ساعت 14 و تخلیه اتاق حداکثر تا 12 ظهر می‌باشد.</p>
                            <p>
                                4. همراه داشتن مدارک هویتی شناسنامه مدارک محرمیت ، گذرنامه برای مسافران خارجی الزامی میباشد.
                            </p>
                        </div>
                    </div>
                    <div className=" border-t  border-b border-gray-300 py-3 text-right mr-28 ">

                        {/* Row 5 */}
                        <div className="text-xs text-gray-600 leading-relaxed text-right">
                            <p>
                                شرایط کنسلی:
                            </p>
                            <p>
                                تا 48 ساعت قبل از ورود نصف یک شب اقامت و تا 24 ساعت قبل از ورود هزینه یک شب اقامت کسر  میگردد ( در ایام پیک کنسلی امکان پذیر نمیباشد). در صورت کنسل کردن رزرو مبلغ قابل استرداد ظرف 72 ساعت  کاری به حساب مسافر عودت داده خواهد شد.
                            </p>

                        </div>
                    </div>

                    <div className="  py-3 text-right ">

                        {/* Row 5 */}
                        <div className="">

                            <div className=" grid grid-cols-[290px_100px_130px] gap-1 text-right">

                                <div className="text-[12px] leading-relaxed text-right">
                                    <p>
                                        رزرو قطعی فقط در صورت پرداخت بیعانه ثبت و انجام میگردد.
                                    </p>
                                    <p className="font-bold">
                                        شماره کارت : 6380-7331-7310-6037
                                    </p>
                                    <p>
                                        بانک مهر ایران ، بنام حسام مقبل
                                    </p>
                                </div>

                                <div className="items-center bg-gray-100 justify-self-end border-2 text-sm border-b-blue-950 rounded-xl w-24">
                                    <div className=" grid grid-rows-2 gap-1 text-center">
                                        <label className="whitespace-nowrap text-center mt-1">مسئول رزرو:</label>
                                        {data.recipient}
                                    </div>
                                </div>
                                <div>
                                    <div className=" bg-gray-200 rounded-lg text-[10px] py-2">
                                        <div className="flex items-center gap-1 justify-center justify-items-center">
                                            {/*<img  className="h-3 w-3 " src={eitaa} />
                                            <img  className="h-3 w-3" src={telegram} />*/}
                                            <p> تلگرام/ایتا :</p>
                                            <p>Hami_hotel@</p>
                                        </div>
                                        <div className="flex items-center gap-1 justify-center justify-items-center ">
                                            {/* <img  className="h-3 w-3" src={instagram} />*/}
                                            <p> اینستاگرام :</p>
                                            <p>Hami.hotel@</p>
                                        </div>
                                        <div className="flex items-center  justify-center gap-1 justify-items-center">
                                            {/*<img  className="h-3 w-3" src={call} />*/}
                                            <p> شماره تماس :</p>
                                            <p>05191690169</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function AppResponse() {
    return <ReservationConfirmation data={reservationData} />;
}