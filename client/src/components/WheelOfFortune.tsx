import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface Prize {
  id: number;
  label: string;
  color: string;
  value: string;
}

interface WheelOfFortuneProps {
  prizes: Prize[];
  onSpinComplete?: (prize: Prize) => void;
  minDeposit?: number;
  currentDeposit?: number;
}

export function WheelOfFortune({
  prizes,
  onSpinComplete,
  minDeposit = 150,
  currentDeposit = 0,
}: WheelOfFortuneProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  const canSpin = currentDeposit >= minDeposit;
  const prizeCount = prizes.length;
  const degreePerPrize = 360 / prizeCount;

  const spinWheel = () => {
    if (isSpinning || !canSpin) return;

    setIsSpinning(true);
    setSelectedPrize(null);

    // Random prize selection (weighted towards lower values, never 0)
    const randomIndex = Math.floor(Math.random() * (prizeCount - 1)) + 1; // Skip index 0
    const targetPrize = prizes[randomIndex];

    // Calculate rotation: spin multiple times + land on target prize
    const spins = 5 + Math.random() * 3; // 5-8 full rotations
    const targetRotation = spins * 360 + randomIndex * degreePerPrize;

    setRotation(targetRotation);

    // Simulate spin duration
    setTimeout(() => {
      setSelectedPrize(targetPrize);
      onSpinComplete?.(targetPrize);
      setIsSpinning(false);
    }, 4000);
  };

  return (
    <Card className="bg-slate-800/50 border-gold/20 p-8">
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-gold" />
            عجلة الحظ
          </h3>
          <p className="text-sm text-gray-400">
            {canSpin
              ? "أنت مؤهل للدوران!"
              : `تحتاج إلى إيداع ${minDeposit}$ للدوران`}
          </p>
        </div>

        {/* Wheel Container */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
            <div className="w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-gold"></div>
          </div>

          {/* Wheel */}
          <motion.div
            ref={wheelRef}
            animate={{ rotate: rotation }}
            transition={{
              duration: 4,
              ease: "easeOut",
            }}
            className="relative w-full h-full"
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 0 20px rgba(212, 175, 55, 0.3))" }}
            >
              {prizes.map((prize, index) => {
                const startAngle = index * degreePerPrize;
                const endAngle = (index + 1) * degreePerPrize;
                const startRad = (startAngle * Math.PI) / 180;
                const endRad = (endAngle * Math.PI) / 180;

                const x1 = 200 + 180 * Math.cos(startRad);
                const y1 = 200 + 180 * Math.sin(startRad);
                const x2 = 200 + 180 * Math.cos(endRad);
                const y2 = 200 + 180 * Math.sin(endRad);

                const largeArc = degreePerPrize > 180 ? 1 : 0;

                const pathData = [
                  `M 200 200`,
                  `L ${x1} ${y1}`,
                  `A 180 180 0 ${largeArc} 1 ${x2} ${y2}`,
                  `Z`,
                ].join(" ");

                const textAngle = startAngle + degreePerPrize / 2;
                const textRad = (textAngle * Math.PI) / 180;
                const textX = 200 + 120 * Math.cos(textRad);
                const textY = 200 + 120 * Math.sin(textRad);

                return (
                  <g key={index}>
                    <path
                      d={pathData}
                      fill={prize.color}
                      stroke="white"
                      strokeWidth="2"
                      opacity="0.9"
                    />
                    <text
                      x={textX}
                      y={textY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="16"
                      fontWeight="bold"
                      transform={`rotate(${textAngle + 90} ${textX} ${textY})`}
                      className="pointer-events-none"
                    >
                      {prize.label}
                    </text>
                  </g>
                );
              })}

              {/* Center circle */}
              <circle cx="200" cy="200" r="30" fill="#d4af37" />
              <circle cx="200" cy="200" r="20" fill="#1a1f3a" />
            </svg>
          </motion.div>
        </div>

        {/* Result Display */}
        {selectedPrize && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center p-4 bg-gradient-to-r from-gold/20 to-yellow-500/20 border border-gold/50 rounded-lg"
          >
            <p className="text-gold font-bold text-lg">🎉 تهانينا!</p>
            <p className="text-white text-2xl font-bold mt-2">
              {selectedPrize.value}
            </p>
            <p className="text-gray-400 text-sm mt-1">
              تم إضافة الجائزة إلى محفظتك
            </p>
          </motion.div>
        )}

        {/* Spin Button */}
        <Button
          onClick={spinWheel}
          disabled={isSpinning || !canSpin}
          className={`w-full h-14 text-lg font-bold rounded-lg transition-all ${
            canSpin
              ? "bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-slate-900"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isSpinning ? "جاري الدوران..." : canSpin ? "دوّر العجلة" : "غير مؤهل"}
        </Button>

        {/* Info */}
        <div className="text-xs text-gray-500 text-center">
          <p>الحد الأدنى للإيداع: {minDeposit}$</p>
          <p>رصيدك الحالي: {currentDeposit}$</p>
        </div>
      </div>
    </Card>
  );
}
