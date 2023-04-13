import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./20230412_151418_DashboardConfig.json");
import cors from "cors";
import express from "express";
// console.log(data);

const app = express();

app.use(express.json());
app.use(cors());

const data1 = [
  {
    name: "test1",
    x: -50,
    y: -50,
  },
  {
    name: "test2",
    x: 0,
    y: 0,
  },
  {
    name: "test3",
    x: 50,
    y: 50,
  },
  {
    name: "test4",
    x: 100,
    y: 100,
  },
  {
    name: "test5",
    x: 150,
    y: 150,
  },
  {
    name: "test6",
    x: 200,
    y: 200,
  },
  {
    name: "test7",
    x: 250,
    y: 250,
  },
  {
    name: "test8",
    x: 350,
    y: 350,
  },
  {
    name: "test9",
    x: 400,
    y: 400,
  },
  {
    name: "test10",
    x: 450,
    y: 450,
  },
  {
    name: "test11",
    x: 500,
    y: 500,
  },
];

const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

app.get("/test/fake_data", (req, res) => {
  res.json(data1);
});

app.get("/test/fake_data2", (req, res) => {
  res.json(data2);
});

app.get("/test/fake_data/Test", (req, res) => {
  res.json(data2);
});

app.get("/test/Test/fake_data/", (req, res) => {
  res.json(data1);
});

app.get("/test/widget_data", (req, res) => {
  res.json(data);
});

app.listen(5001, () => console.log("Server running on port 5001"));
