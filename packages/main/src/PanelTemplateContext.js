class PanelTemplateContext {
	static calculate(state) {
		const context = {
			ctr: state,
			expanded: !state.collapsed,
			ariaLabelledBy: state.header ? undefined : `${state._id}-header`,
			accRole: state.accessibleRole.toLowerCase(),
			classes: {
				main: {
					sapMPanel: true,
				},
				header: {
					sapMPanelWrappingDivTb: state.header,
					sapMPanelWrappingDivTbExpanded: state.header && state.collapsed,
					sapMPanelWrappingDiv: !state.header,
					sapMPanelWrappingDivExpanded: !state.header && !state.collapsed,
				},
				icon: {
					sapMPanelIconExpanded: !state.collapsed,
					sapMPanelIcon: true,
				},
				content: {
					sapMPanelContent: true,
					sapMPanelExpandablePart: !state.fixed,
					[`sapMPanelBG${state.backgroundDesign}`]: true,
				},
			},
			styles: {
				main: {
				},
				info: {
					display: state._contentExpanded ? "block" : "none",
				},
				content: {
					display: state._contentExpanded ? "block" : "none",
				},
			},
			shouldRenderH1: !state.header && (state.headerText || !state.fixed),
		};

		return context;
	}
}

export default PanelTemplateContext;
