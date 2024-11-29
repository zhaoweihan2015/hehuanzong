import React from "react";
import "./index.css";

interface ProgressBarProps {
  currentValue: number; // 当前值
  maxValue: number; // 最大值
  lowColor?: string; // 低值颜色
  highColor?: string; // 高值颜色
  height?: string; // 高度
  borderRadius?: string; // 边框圆角
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentValue,
  maxValue,
  lowColor = "#e74c3c", // 默认低值颜色：红色
  highColor = "#2ecc71", // 默认高值颜色：绿色
  height = "20px", // 默认高度
  borderRadius = "10px", // 默认圆角
}) => {
  // 计算进度百分比
  const percentage = (currentValue / maxValue) * 100;

  // 处理低于0或超过最大值的情况
  const safePercentage = Math.max(0, Math.min(percentage, 100));

  // 根据进度值来选择颜色，低值时使用 lowColor，其他情况下使用 highColor
  const barColor = safePercentage <= 30 ? lowColor : highColor;

  return (
    <div className="progress-bar" style={{ height, borderRadius }}>
      <div
        className="progress-bar-fill"
        style={{
          width: `${safePercentage}%`,
          backgroundColor: barColor,
          height,
          borderRadius,
        }}
      />
      <span>
        {currentValue}/{maxValue}
      </span>
    </div>
  );
};

export default ProgressBar;
