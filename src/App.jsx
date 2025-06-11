import React, { useState } from "react";
import * as XLSX from "xlsx";
import ReservationConfirmation from "./ReservationConfirmation";
import './App.css';

const exampleReservation = {
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

export default function App() {
    const [reservations, setReservations] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (evt) => {
            const arrayBuffer = evt.target.result;
            const workbook = XLSX.read(arrayBuffer, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const rawData = XLSX.utils.sheet_to_json(worksheet);

            const structuredData = rawData.map((row) => ({
                guest: {
                    guestName: row.guestName,
                    guestNumber: row.guestNumber,
                    guestBD: row.guestBD,
                },
                hotel: {
                    hotelName: row.hotelName,
                    hotelAddress: row.hotelAddress,
                    reservationDate: row.reservationDate,
                },
                stay: {
                    arrivalDate: row.arrivalDate,
                    arrivalDateDay: row.arrivalDateDay,
                    departureDate: row.departureDate,
                    departureDateDay: row.departureDateDay,
                    stayDuration: row.stayDuration,
                    stayType: row.stayType,
                    firstMeal: row.firstMeal,
                    lastMeal: row.lastMeal,
                    noOfAdults: row.noOfAdults,
                    noOfChildren: row.noOfChildren,
                },
                payment: {
                    totalAmount: row.totalAmount,
                    guestPayment: row.guestPayment,
                    remainingCost: row.remainingCost,
                },
                room: {
                    roomType: row.roomType,
                    rate: row.rate,
                },
                paymentCode: row.paymentCode,
                notes: row.notes,
                recipient: row.recipient,
            }));

            setReservations(structuredData);
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div className="p-4 font-vazir rtl justify-items-center">
            <div className="flex justify-center mb-6">
                <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    بارگذاری فایل رزرو
                    <input
                        type="file"
                        accept=".xlsx, .xls"
                        onChange={handleFileUpload}
                        className="hidden"
                    />
                </label>
            </div>

            {(reservations.length > 0 ? reservations : [exampleReservation]).map((data, index) => (
                <div key={index} className="mb-10">
                    <ReservationConfirmation data={data} />
                </div>
            ))}
        </div>
    );
}
