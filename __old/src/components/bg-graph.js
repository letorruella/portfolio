import React, { PureComponent } from "react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const data = [
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
]

class BGGraph extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  componentDidMount() {
    fetch(
      "https://wakatime.com/share/@929a01ce-bed3-40c9-a1f4-284b92dcad7c/7cf0ed2a-27bd-4fb2-b5ad-a86a927a5bcb.json",
      { headers: { "Content-Type": "application/json" } }
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items,
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      )
    }
  }
}

export default BGGraph
