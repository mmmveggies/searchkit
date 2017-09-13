import * as React from "react";
import * as PropTypes from "prop-types"
import {defaults} from "lodash"


import {
	SearchkitComponent,
	SearchkitComponentProps,
	ViewOptionsAccessor,
	RenderComponentType,
	RenderComponentPropType
} from "../../../core"

import {
	Hits, HitsProps, HitItemProps, HitsListProps
} from "../../"

export interface ViewSwitcherConfigProps extends SearchkitComponentProps {
	hitComponents:[{
		key:string,
		title:string,
		itemComponent?:RenderComponentType<HitItemProps>,
		listComponent?:RenderComponentType<HitsListProps>,
		defaultOption?:boolean
	}]
}

export class ViewSwitcherConfig extends SearchkitComponent<ViewSwitcherConfigProps, any> {
  accessor:ViewOptionsAccessor

	static propTypes = defaults({
		hitComponents:PropTypes.arrayOf(
			PropTypes.shape({
				key:PropTypes.string.isRequired,
				title:PropTypes.string.isRequired,
				itemComponent:RenderComponentPropType,
				listComponent:RenderComponentPropType,
				defaultOption:PropTypes.bool
			})
		)
	}, SearchkitComponent.propTypes)

  defineAccessor(){
    return new ViewOptionsAccessor("view", this.props.hitComponents)
  }
  render(){
    return null
  }
}
