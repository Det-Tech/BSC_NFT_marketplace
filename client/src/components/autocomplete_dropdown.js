import React from "react";
import { Component } from 'react';
import { jsx } from '@emotion/react';
import Button from '@material-ui/core/button';
import {withRouter} from 'react-router-dom';
import Select from 'react-select';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const options = [
  {value: '1', label: 'Accounting'},
  {value: '2', label: 'Finance'},
  {value: '3', label: 'Sales'},
  {value: '4', label: 'Research and Development'},
  {value: '5', label: 'IT'},
  {value: '6', label: 'Management'},
  {value: '7', label: 'Administration'},
  {value: '8', label: 'Customer service'},
  {value: '9', label: 'customer support'},
  {value: '10', label: 'Technical support'},
  {value: '11', label: 'Marketing'},
  {value: '12', label: 'Logistics'},
  {value: '13', label: 'Operations'},
  {value: '14', label: 'Planning'},
  {value: '15', label: 'Human resources'},
  {value: '16', label: 'Purchasing'},
  {value: '17', label: 'Quality assurance'},
  {value: '18', label: 'Engineering'},
  {value: '19', label: 'Export'},
  {value: '20', label: 'Shipping'},
  {value: '21', label: 'Public relations'},
  {value: '22', label: 'Production'},
  {value: '23', label: 'Supervision'},
  {value: '24', label: 'Product quality'},
  {value: '25', label: 'Inventory'},
]

const selectStyles = {
  option: (styles, state) => ({
    ...styles,
    cursor: 'pointer',
  }),
  control: provided => ({ ...provided, minWidth: 240, margin: 8, cursor: "auto" }),
  menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)', color: "black" }),
};

class Department extends Component {
  state = { isOpen: false, value: undefined };
  toggleOpen = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };
  onSelectChange = value => {
    this.toggleOpen();
    this.setState({ value });
    var department = value.label.replace(/\s+/g, '-');
    this.props.history.push(`/`)
  };
   
  render() {
    const { isOpen, value } = this.state;
    return (
      <div className = "x-autocomplete-open-button">
      <Dropdown
        isOpen={isOpen}
        onClose={this.toggleOpen}
        target={
          <Button
            style = {{color: "white"}}
            onClick={this.toggleOpen}
            isSelected={isOpen}
          >
            {/* {value ? `State: ${value.label}` : 'Select a State'} */}
            Categories
            <ExpandMoreIcon />
          </Button>
        }
      >
        <Select
          autoFocus
          backspaceRemovesValue={false}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          menuIsOpen
          onChange={this.onSelectChange}
          options={options}
          placeholder="Search..."
          styles={selectStyles}
          tabSelectsValue={false}
          value={value}
        />
      </Dropdown>
      </div>
    );
  }
}

// styled components

const Menu = props => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      css={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        zIndex: 2,
      }}
      {...props}
    />
  );
};
const Blanket = props => (
  <div
    css={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1
    }}
    {...props}
  />
);
const Dropdown = ({ children, isOpen, target, onClose }) => (
  <div>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);


export default withRouter(Department);



