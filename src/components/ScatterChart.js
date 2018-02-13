import React from 'react'
import CustomTooltip from './Tooltip'
import { toMinAndSec } from '../utils'
import {
	ResponsiveContainer,
	ScatterChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Scatter,
	Label,
	Dot
} from 'recharts'
const CustomizedShape = ({ cx, cy, fill, Name }) => (
	<g>
		<Dot cx={cx} cy={cy} r={5} fill={fill} />
		<g transform={`translate(${cx},${cy})`}>
			<text x={10} y={0} dy={4} textAnchor="left">
				{Name}
			</text>
		</g>
	</g>
)
const Chart = ({ data }) => (
	<ResponsiveContainer width="80%" height={700}>
		<ScatterChart
			width={400}
			height={400}
			margin={{ top: 20, right: 120, bottom: 20, left: 120 }}>
			<XAxis
				dataKey={'SecondsDelta'}
				type="number"
				name="Minutes behind fastest time"
				reversed={true}
				tickFormatter={sec => toMinAndSec(sec)}>
				<Label value="Minutes behind fastest time" position="bottom" />
			</XAxis>
			<YAxis
				dataKey={'Place'}
				type="number"
				name="Ranking"
				reversed={true}
				domain={[1, 'dataMax']}
				tickCount={10}>
				<Label value="Ranking" position="left" angle={-90} />
			</YAxis>

			<CartesianGrid />
			<Scatter
				dataKey="dope"
				name="Doping allegations"
				data={data.filter(o => o.Doping)}
				fill="#833471"
				shape={<CustomizedShape />}
			/>
			<Scatter
				dataKey="noDope"
				name="No doping allegations"
				data={data.filter(o => !o.Doping)}
				fill="#FFC312"
				shape={<CustomizedShape />}
			/>

			<Legend verticalAlign="top" height={50} />
			<Tooltip
				viewBox={{ x: 0, y: 0, width: 400, height: 400 }}
				cursor={{ strokeDasharray: '3 3' }}
				content={<CustomTooltip />}
				coordinate={{ x: 100, y: 140 }}
			/>
		</ScatterChart>
	</ResponsiveContainer>
)
export default Chart
