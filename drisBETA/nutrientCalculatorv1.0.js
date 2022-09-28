import React from 'react';

const calc = props => {
return (
<div>
<div>{props.currentCounting}</div>
<div onClick={() => props.setCounting(props.currentCounting+1)}>Click me for count up</div>
<div onClick={() => props.setCounting(props.currentCounting-1)}>Click me for count down</div>

</div>
)
}

export default calc;