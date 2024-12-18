import React from "react";
import { QRCodeSVG } from 'qrcode.react';
import PageContainer from "./layout/PageContainer";

const Voucher = ({ user }) => {
  const voucherData = {
    code: 'WELCOME15',
    email: user?.email,
    timestamp: new Date().toISOString()
  };

  const qrValue = JSON.stringify(voucherData);

  return (
    <PageContainer title="Your Special Offer">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="border-4 border-dashed border-primary p-8 text-center">
          <div className="mb-4 text-gray-600">
            Welcome, {user?.email?.split('@')[0]}!
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">15% OFF</h2>
          <p className="text-xl text-gray-700 mb-4">Your First Purchase</p>
          <p className="text-sm text-gray-500 mb-6">Use code: WELCOME15</p>
          
          <div className="flex justify-center mb-6">
            <QRCodeSVG 
              value={qrValue}
              size={180}
              level="H"
              includeMargin={true}
            />
          </div>

          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => window.print()} 
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              Print Voucher
            </button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Voucher;