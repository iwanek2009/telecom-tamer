import React from 'react';
import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { StickeeWidget } from '@/components/StickeeWidget';

const SouthamptonBroadbandTV = () => {
  return (
    <CitystyleTemplate>
      <CitystyleHero
        title="Southampton Broadband & TV Deals"
        subtitle="Find the perfect broadband and TV bundle for your Southampton home"
        image="/lovable-uploads/southampton-tv-broadband.jpg"
        imageAlt="Southampton Broadband and TV Services"
        accordionItems={[
          {
            title: "Why Bundle Broadband & TV?",
            content: "Save money and enjoy seamless entertainment with combined broadband and TV packages in Southampton. Most providers offer significant discounts when you bundle services together.",
          },
          {
            title: "Available TV Channels",
            content: "Choose from hundreds of channels including premium sports, movies, and entertainment. Many packages include streaming services and catch-up TV.",
          },
          {
            title: "Installation & Setup",
            content: "Professional installation is often included with TV and broadband bundles. Your provider will ensure everything is working perfectly before they leave.",
          }
        ]}
      />
      <StickeeWidget />
    </CitystyleTemplate>
  );
};

export default SouthamptonBroadbandTV;