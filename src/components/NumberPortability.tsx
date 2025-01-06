import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NumberPortability = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-8">
              Keeping Your Phone Number When Switching Networks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Getting Your PAC Code</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Send a free text message with 'PAC' to 65075, and you'll receive your unique PAC code almost instantly. 
                    This code is your key to transferring your number and will remain valid for 30 days. Every UK mobile number 
                    is eligible for this service, regardless of whether you're on a contract or pay-as-you-go plan.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Starting The Switch</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Once you have your PAC code, share it with your new provider when signing up for your chosen plan. 
                    You can do this either online through their website or in-store with their staff. Your new provider 
                    will confirm they've received the code and initiate the transfer process.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">During The Transfer</h3>
                  <p className="text-gray-600 leading-relaxed">
                    While your number is being transferred, continue using your current SIM card as normal. The transfer 
                    typically takes between one and three working days to complete. Throughout this time, you'll receive 
                    text updates about the progress of your switch, and your service won't be interrupted.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Completing The Process</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You'll receive a confirmation message when your number has been successfully transferred. At this point, 
                    simply insert your new SIM card and you're ready to go. Your contacts won't notice any change – they'll 
                    still reach you on the same number they've always used.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NumberPortability;