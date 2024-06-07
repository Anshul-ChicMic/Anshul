import { RFValue } from 'react-native-responsive-fontsize';
import ellipse from '../svg/Ellipse25.svg';
import expense from '../svg/Expense.svg';
import income from '../svg/Income.svg';
import transfer from '../svg/Transaction(1).svg';
import home from '../svg/home.svg';
import piechart from '../svg/pie-chart.svg';
import transaction from '../svg/transaction.svg';
import user from '../svg/user.svg';
const iconStyle = (
  { width = 0,
    height = 0,
    color = 'black',
    borderColor = 'none', }
) => ({
  width: RFValue(width),
  height: RFValue(height),
  fill: color,
  stroke: borderColor,
});
type iconProps = { width: number, height: number, color?: string, borderColor?: string };

export const ICONS = {
  home: (params: iconProps) => home({ ...iconStyle({ ...params }) }),
  user: (params: iconProps) => user({ ...iconStyle({ ...params }) }),
  piechart: (params: iconProps) => piechart({ ...iconStyle({ ...params }) }),
  transaction: (params: iconProps) => transaction({ ...iconStyle({ ...params }) }),
  ellipse: (params: iconProps) =>ellipse({ ...iconStyle({ ...params }) }),
 income: (params: iconProps) =>income({ ...iconStyle({ ...params }) }),
  expense: (params: iconProps) =>expense({ ...iconStyle({ ...params }) }),
  transfer: (params: iconProps) => transfer({ ...iconStyle({ ...params }) }),
};