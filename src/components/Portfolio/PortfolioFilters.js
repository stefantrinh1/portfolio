import React, { useEffect } from "react";
import {
  setTextFilter,
  setProjectType,
  setStacks,
  fetchStackOptions
} from "../../actions/PortfolioFilter";
import { connect } from "react-redux";
import LoadingPage from "../LoadingPage/LoadingPage"
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import S from "./PortfolioFilters.module.scss"

const PortfolioFilters = props => {

  const options = props.portfolioFilter.stackOptions.map((stack)=>{
      return  { label: stack, value: stack }
  })

  useEffect(() => {
    props.dispatch(fetchStackOptions())
  }, []);

  if (props.error) {
    return (
      <div> Could not Load page at this time, please try again later.</div>
    );
  }

  if (props.loading) {
    return <LoadingPage />;
  }
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: "lightgrey",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      color: "lightgrey",
    }),
    dropdownButton:  (provided, state) => ({
      ...provided,
      background: "#222222",
      border: 'solid 1px #ffb300',
      color: '#ffb300',
      borderRadius: '5px',
      height:'106.5%',
    }),
    control :(provided, state) => ({
      ...provided,
      backgroundColor: "#222222",
      color:"#ffb300"
    }),
    input :(provided, state) => ({
      ...provided,
      color:"white"
    }),
    option:(provided, state) => ({
      ...provided,
      color:"#ffb300"
    }),
    dropdownIndicator:(provided, state) => ({
      ...provided,
      background:"#ffb300"
    }),
    container:(provided, state) => ({
      ...provided,
      background:"#222222"
    }),
  }

  return (
    <section className={S.filters}>
      <input
      className={S.searchfilter}
        type="text"
        placeholder="Search"
        value={props.portfolioFilter.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />

      <select
      className={S.projecttypefilter}
        placeholder="Project Type"
        value={props.portfolioFilter.projectType}
        onChange={e => {
          props.dispatch(setProjectType(e.target.value));
        }}
      >
        <option value="All">All</option>
        <option value="e-commerce">E-Commerce</option>
        <option value="portfolio">Portfolio</option>
        <option value="blog">Blog</option>
        <option value="commercial">Commercial</option>
        <option value="utility">Utility</option>
      </select>

      <ReactMultiSelectCheckboxes styles={customStyles} options={options} onChange={(e)=> {
          props.dispatch(setStacks(e.map((element)=>{
            return element.value
        })));
      }}/>
    </section>
  );
};

// map state to props functions
const mapStateToProps = state => {
  const { portfolioFilter } = state;
  return {
    portfolioFilter: state.portfolioFilter,
    loading: portfolioFilter.loading,
    error: portfolioFilter.error
  };
};

export default connect(mapStateToProps)(PortfolioFilters);
