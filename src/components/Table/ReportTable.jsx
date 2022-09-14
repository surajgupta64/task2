import { useState, useEffect } from "react";
import "./table.css";

const SalesClosure = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [collected, setCollected] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.target));
      setNewsales(newsales + Number(value1.newsales));
      setRenewals(renewals + Number(value1.renewals));
      setBalance(balance + Number(value1.balance));
      setCollected(collected + Number(value1.collected));
      setAchived(achived + Number(value1.achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th colSpan={8} style={{ padding: "0px" }}>
            <div
              className="text-center text-capitalize"
              style={{
                fontSize: "21px",
                color: "#000000",
                padding: "5px",
                backgroundColor: "#ffffff",
              }}
            >
              {title}
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Target</th>
          <th>New Sales</th>
          <th>Renewals</th>
          <th>Balance Collection</th>
          <th>Collected</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.srno}</td>
              <td>{value.counseller}</td>
              <td>{value.target}</td>
              <td>{value.newsales}</td>
              <td>{value.renewals}</td>
              <td>{value.balance}</td>
              <td>{value.collected}</td>
              <td>{value.achived}</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{collected}</td>
          <td>{achived}</td>
        </tr>
      </tbody>
    </table>
  );
};

const ClientClosure = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.targetclient));
      setNewsales(newsales + Number(value1.newclient));
      setRenewals(renewals + Number(value1.renewalsclient));
      setBalance(balance + Number(value1.closureno));
      setAchived(achived + Number(value1.achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th colSpan={7} style={{ padding: "0px" }}>
            <div
              className="text-center text-capitalize"
              style={{
                fontSize: "21px",
                color: "#000000",
                padding: "5px",
                backgroundColor: "#ffffff",
              }}
            >
              {title}
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Target</th>
          <th>New Client</th>
          <th>Renewals Client</th>
          <th>Balance Collection</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.srno}</td>
              <td>{value.counseller}</td>
              <td>{value.target}</td>
              <td>{value.newsales}</td>
              <td>{value.renewals}</td>
              <td>{value.balance}</td>
              <td>{value.achived}</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{achived}</td>
        </tr>
      </tbody>
    </table>
  );
};

const LeadTarget = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.target));
      setNewsales(newsales + Number(value1.newsales));
      setRenewals(renewals + Number(value1.renewals));
      setBalance(balance + Number(value1.balance));
      setAchived(achived + Number(value1.achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th colSpan={7} style={{ padding: "0px" }}>
            <div
              className="text-center text-capitalize"
              style={{
                fontSize: "21px",
                color: "#000000",
                padding: "5px",
                backgroundColor: "#ffffff",
              }}
            >
              {title}
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Target</th>
          <th>New Sales</th>
          <th>Renewals</th>
          <th>Balance Collection</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.srno}</td>
              <td>{value.counseller}</td>
              <td>{value.target}</td>
              <td>{value.newsales}</td>
              <td>{value.renewals}</td>
              <td>{value.balance}</td>
              <td>{value.achived}</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{achived}</td>
        </tr>
      </tbody>
    </table>
  );
};
const RenewalsTarget = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.target));
      setNewsales(newsales + Number(value1.newsales));
      setRenewals(renewals + Number(value1.renewals));
      setBalance(balance + Number(value1.balance));
      setAchived(achived + Number(value1.achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th colSpan={7} style={{ padding: "0px" }}>
            <div
              className="text-center text-capitalize"
              style={{
                fontSize: "21px",
                color: "#000000",
                padding: "5px",
                backgroundColor: "#ffffff",
              }}
            >
              {title}
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Target</th>
          <th>New Sales</th>
          <th>Renewals</th>
          <th>Balance Collection</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.srno}</td>
              <td>{value.counseller}</td>
              <td>{value.target}</td>
              <td>{value.newsales}</td>
              <td>{value.renewals}</td>
              <td>{value.balance}</td>
              <td>{value.achived}</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{achived}</td>
        </tr>
      </tbody>
    </table>
  );
};

const RefranceLeadTarget = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.target));
      setNewsales(newsales + Number(value1.newsales));
      setRenewals(renewals + Number(value1.renewals));
      setBalance(balance + Number(value1.balance));
      setAchived(achived + Number(value1.achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th colSpan={7} style={{ padding: "0px" }}>
            <div
              className="text-center text-capitalize"
              style={{
                fontSize: "21px",
                color: "#000000",
                padding: "5px",
                backgroundColor: "#ffffff",
              }}
            >
              {title}
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Target</th>
          <th>New Sales</th>
          <th>Renewals</th>
          <th>Balance Collection</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.srno}</td>
              <td>{value.counseller}</td>
              <td>{value.target}</td>
              <td>{value.newsales}</td>
              <td>{value.renewals}</td>
              <td>{value.balance}</td>
              <td>{value.achived}</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{achived}</td>
        </tr>
      </tbody>
    </table>
  );
};

const DailyCalls = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.target));
      setNewsales(newsales + Number(value1.newsales));
      setRenewals(renewals + Number(value1.renewals));
      setBalance(balance + Number(value1.balance));
      setAchived(achived + Number(value1.achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th colSpan={7} style={{ padding: "0px" }}>
            <div
              className="text-center text-capitalize"
              style={{
                fontSize: "21px",
                color: "#000000",
                padding: "5px",
                backgroundColor: "#ffffff",
              }}
            >
              {title}
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Target</th>
          <th>New Sales</th>
          <th>Renewals</th>
          <th>Balance Collection</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.srno}</td>
              <td>{value.counseller}</td>
              <td>{value.target}</td>
              <td>{value.newsales}</td>
              <td>{value.renewals}</td>
              <td>{value.balance}</td>
              <td>{value.achived}</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{achived}</td>
        </tr>
      </tbody>
    </table>
  );
};

const MediaTarget = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.target));
      setNewsales(newsales + Number(value1.newsales));
      setRenewals(renewals + Number(value1.renewals));
      setBalance(balance + Number(value1.balance));
      setAchived(achived + Number(value1.achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th colSpan={7} style={{ padding: "0px" }}>
            <div
              className="text-center text-capitalize"
              style={{
                fontSize: "21px",
                color: "#000000",
                padding: "5px",
                backgroundColor: "#ffffff",
              }}
            >
              {title}
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Target</th>
          <th>New Sales</th>
          <th>Renewals</th>
          <th>Balance Collection</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.srno}</td>
              <td>{value.counseller}</td>
              <td>{value.target}</td>
              <td>{value.newsales}</td>
              <td>{value.renewals}</td>
              <td>{value.balance}</td>
              <td>{value.achived}</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{achived}</td>
        </tr>
      </tbody>
    </table>
  );
};

export {
  SalesClosure,
  ClientClosure,
  LeadTarget,
  RenewalsTarget,
  RefranceLeadTarget,
  MediaTarget,
  DailyCalls,
};
