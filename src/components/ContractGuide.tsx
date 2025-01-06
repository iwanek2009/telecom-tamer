import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContractGuide = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="border-none shadow-none bg-transparent">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-8">
              Understanding Pay Monthly Phone Contracts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Choosing Your Deal</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Take time to select a handset that meets your needs and a data plan that matches your usage. 
                    Consider the contract length carefully – most run for 24 months, but you might find 12 or 36-month options. 
                    Look at the included benefits, such as streaming subscriptions or roaming allowances.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Sign-up Journey</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The application process is mostly completed online. You'll need to provide identification and address 
                    details for a credit check. This check helps providers ensure you can manage the monthly payments. 
                    Once approved, you'll set up a Direct Debit for your monthly payments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Initial Setup and Payments</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Many contracts, especially for premium phones, require an upfront payment. This reduces your monthly 
                    costs and secures your handset. You'll also need to consider the timing of your first monthly payment 
                    and any additional costs like insurance or delivery charges.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Getting Started With Your New Phone</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your new phone will typically arrive within a few working days. The activation process is simple, 
                    and if you're keeping your old number, you can start the transfer process right away. Most modern 
                    phones make it easy to transfer your data, apps, and settings from your old device.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Managing Your Contract</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Keep track of your monthly payment dates and monitor your usage through your provider's app or website. 
                    Understanding your bill and knowing how to contact customer support will help you manage your contract effectively.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
                  <p className="text-gray-600 leading-relaxed">
                    Remember to mark your contract end date in your calendar and set a reminder for 30 days before. 
                    This gives you time to explore new options and ensure you're always getting the best value from 
                    your mobile phone contract.
                  </p>
                  <p className="text-gray-600 mt-4 font-medium">
                    Need more guidance? Our team of experts is ready to help you through every step of the process, 
                    from choosing your perfect plan to setting up your new phone.
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

export default ContractGuide;