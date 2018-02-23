import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import "./App.css";

const mediums = [
  { value: "vk",        label: "Вконтакте" },
  { value: "instagram", label: "Instagram" },
  { value: "teaser",    label: "Тизерные сети" },
  { value: "youtube",   label: "Youtube" },
  { value: "other",     label: "Другое" }
];

class App extends Component {
  state = {
    campaign: "",
    medium: mediums[0],
    content: ""
  };

  handleCampaignChange = event => {
    this.setState({ campaign: event.target.value });
  };

  handleMediumChange = option => {
    this.setState({ medium: option });
  };

  handleContentChange = event => {
    this.setState({ content: event.target.value });
  };

  getLink = () => {
    const { campaign, medium, content } = this.state;
    const link = `https://questquest.net/?utm_source=cpa&utm_medium=${
      medium.value
    }&utm_campaign=${campaign}`;
    return content === "" ? link : link + `&utm_campaign=${content}`;
  };

  render() {
    const { campaign, medium, content } = this.state;

    return (
      <div className="col-md-4 col-md-offset-4">
        <h1>Promo Link Generator</h1>
        <div className="form-group">
          <label for="campaign">
            Ваш персональный промокод (обязательно)
          </label>
          <input
            id="campaign"
            className="form-control"
            placeholder="Промокод"
            onChange={this.handleCampaignChange}
            value={campaign}
          />
        </div>
        <div className="form-group">
          <label for="medium">
            Откуда гонится трафик (обязательно)
          </label>
          <Select
            id="medium"
            clearable={false}
            value={medium.value}
            onChange={this.handleMediumChange}
            options={mediums}
          />
        </div>
        <div className="form-group">
          <label for="content">
            Метка для схожих объявлений (опционально)
          </label>
          <input
            id="content"
            className="form-control"
            placeholder="Метка"
            onChange={this.handleContentChange}
            value={content}
          />
        </div>
        {campaign !== "" && <div>{this.getLink()}</div>}
      </div>
    );
  }
}

export default App;
