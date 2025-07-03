
import React, { useState, useEffect } from 'react';
import { X, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const ParkingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before in this session
    const popupShown = sessionStorage.getItem('parkingPopupShown');
    
    if (!popupShown && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('parkingPopupShown', 'true');
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Car className="w-8 h-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl font-bold">
            ¡Parking Gratuito!
          </DialogTitle>
          <DialogDescription className="text-center text-base leading-relaxed">
            <span className="font-semibold text-primary">¡Oferta especial!</span>
            <br />
            Disfruta de <span className="font-bold">1 hora de parking gratuito</span> en el Parking Gran Vía de Logroño cuando comas en nuestro restaurante.
            <br />
            <br />
            <span className="text-sm text-muted-foreground">
              Presenta tu ticket de parking al realizar tu pedido.
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-3 mt-6">
          <Button onClick={handleClose} className="flex-1">
            ¡Perfecto!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ParkingPopup;
