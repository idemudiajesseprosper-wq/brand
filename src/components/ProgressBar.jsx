"use client";

export default function ProgressBar({ total, remaining }) {
  const percent = ((total - remaining) / total) * 100;

  return (
    <div className="mt-3">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-xs mt-1 text-gray-600">
        {remaining} of {total} slots left
      </p>
    </div>
  );
}
