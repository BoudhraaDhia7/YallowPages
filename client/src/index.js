import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Search } from "@syncfusion/ej2-react-dropdowns";

registerLicense(
  "Mgo+DSMBaFt+QHFqUUdrWU5GdkBAXWFKblR8QWVTfldgBShNYlxTR3ZbQF1jTnpadURnXn1f;Mgo+DSMBPh8sVXJ1S0d+WFBPc0BAXXxLflF1VWRTe1h6dVxWESFaRnZdQV1nS35TcUFqWn5aeHJU;ORg4AjUWIQA/Gnt2VFhhQlVFfVpdX2NWfFN0RnNedVp2flRPcC0sT3RfQF5jTXxTdkJnUHxfdXRVRw==;MTc4NzEyMEAzMjMxMmUzMTJlMzQzMUZ0eXUyU2NqRHROM1ZWcEM5clRsSXpRa1p0UGNlNWlyYTArNHVRTFJqNWs9;MTc4NzEyMUAzMjMxMmUzMTJlMzQzMUhqUDFWSC9kbWQ4WnBQTlBIM0lCQ3hrVWN1b0dpYVVCVk1BbzhTK3orVjg9;NRAiBiAaIQQuGjN/V0d+XU9Ad1RHQmFJYVF2R2BJeFR0cl9HaUwgOX1dQl9gSXpRdkVkXXZdcXFQT2E=;MTc4NzEyM0AzMjMxMmUzMTJlMzQzMUExM0dzOGJxNi8zT2psc01Zd1JCaDIwRENxL0tmZ01RdFZzMlY3bmFHbjA9;MTc4NzEyNEAzMjMxMmUzMTJlMzQzMUk3QTlnL0VSOUozRDBmSVNzTzJCZHk3aXkzNmJjcVJ3RUszSWkwWXcySkU9;Mgo+DSMBMAY9C3t2VFhhQlVFfVpdX2NWfFN0RnNedVp2flRPcC0sT3RfQF5jTXxTdkJnUHxfdnJcRw==;MTc4NzEyNkAzMjMxMmUzMTJlMzQzMU9OclRnZTJidWpiL2JDVlhwNTlJUmdsT2dXOWhxTzVVdUw0b0tVb1JTQTg9;MTc4NzEyN0AzMjMxMmUzMTJlMzQzMUFjT0g0NjlhQ0pycnFJQjAxcW9uL3c4aEp5d2YxeHkvRWFqbUpXSEUwamM9;MTc4NzEyOEAzMjMxMmUzMTJlMzQzMUExM0dzOGJxNi8zT2psc01Zd1JCaDIwRENxL0tmZ01RdFZzMlY3bmFHbjA9"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
