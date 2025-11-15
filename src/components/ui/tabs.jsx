import * as React from "react";

// Root Tabs Component
export function Tabs({ children, defaultValue }) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div className="w-full" data-tabs-root>
      {React.Children.map(children, (child) => {
        if (!child) return null;

        // Pass props to children
        return React.cloneElement(child, { value, setValue });
      })}
    </div>
  );
}

// Tabs List (Button Row)
export function TabsList({ children, value, setValue }) {
  return (
    <div className="flex w-full border-b border-gray-200 mb-4" data-tabs-list>
      {React.Children.map(children, (child) => {
        if (!child) return null;
        return React.cloneElement(child, { value, setValue });
      })}
    </div>
  );
}

// Each Individual Tab Button
export function TabsTrigger({ children, tabValue, value, setValue }) {
  const isActive = value === tabValue;

  return (
    <button
      className={`
        px-4 py-2 text-sm font-medium border-b-2 transition-all
        ${isActive ? "border-orange-500 text-orange-600" : "border-transparent text-gray-600 hover:text-black"}
      `}
      onClick={() => setValue(tabValue)}
    >
      {children}
    </button>
  );
}

// Visible Tab Content
export function TabsContent({ children, tabValue, value }) {
  if (value !== tabValue) return null;

  return <div className="mt-2" data-tabs-content>{children}</div>;
}
