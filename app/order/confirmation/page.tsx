import { Suspense } from 'react';
import type { Metadata } from 'next';
import { ConfirmationContent } from '@/components/order/confirmation-content';

export const metadata: Metadata = {
  title: 'Order Confirmed',
  description: 'Your order has been confirmed. Fresh dairy is on its way!',
};

export default function ConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
