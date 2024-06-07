import React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

interface ExpenseDataPoint {
  date: string;
  amount: number;
}

interface ExpenseGraphProps {
  data: ExpenseDataPoint[];
  width: number;
  height: number;
}

const ExpenseGraph: React.FC<ExpenseGraphProps> = ({ data, width, height }) => {
  if (data.length === 0) return null;

  const maxAmount = Math.max(...data.map(d => d.amount));
  const minAmount = Math.min(...data.map(d => d.amount));

  // Generate the path for the curve
  const path = data.reduce((acc, point, index) => {
    const x = (width / (data.length - 1)) * index;
    const y = height - (height * (point.amount - minAmount) / (maxAmount - minAmount));

    if (index === 0) {
      return `M${x},${y}`;
    } else {
      const prevPoint = data[index - 1];
      const prevX = (width / (data.length - 1)) * (index - 1);
      const prevY = height - (height * (prevPoint.amount - minAmount) / (maxAmount - minAmount));
      const cx = (x + prevX) / 2;
      const cy = (y + prevY) / 2;
      return `${acc} Q${cx},${cy} ${x},${y}`;
    }
  }, '');

  // Closing the path for the gradient fill
  const gradientPath = `${path} L${width},${height} L0,${height} Z`;

  return (
    <View>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0%" stopColor="purple" stopOpacity="0.6" />
            <Stop offset="100%" stopColor="white" stopOpacity="0.1" />
          </LinearGradient>
        </Defs>
        <Path d={gradientPath} fill="url(#grad)" />
        <Path d={path} fill="none" stroke="purple" strokeWidth={2} />
      </Svg>
    </View>
  );
};

export default ExpenseGraph;





