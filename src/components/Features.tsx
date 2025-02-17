import React from 'react';
import { Clock, Shield, BookOpen, MessageSquare } from 'lucide-react';

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    name: 'Easy Registration Process',
    description: 'Simple step-by-step process to register your intellectual property rights.',
    icon: Clock,
  },
  {
    name: 'Secure Protection',
    description: 'State-of-the-art security measures to protect your intellectual property information.',
    icon: Shield,
  },
  {
    name: 'Educational Resources',
    description: 'Comprehensive guides and tutorials about intellectual property rights.',
    icon: BookOpen,
  },
  {
    name: 'Expert Support',
    description: '24/7 support from our team of intellectual property experts.',
    icon: MessageSquare,
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="flex flex-col">
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
        <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
        {feature.name}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p className="flex-auto">{feature.description}</p>
      </dd>
    </div>
  );
}

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Protect Your Innovation
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to secure your intellectual property
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.name} feature={feature} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}