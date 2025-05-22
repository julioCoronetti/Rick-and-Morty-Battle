import { useLocation } from "react-router-dom";
import { useBattleHistory } from "../../../contexts/BattleHistoryProvider";
import { Card } from "../../../components/Card";
import { HomeButton } from "../../../components/HomeButton";
import { BattleField, StartBattleContainer } from "./styles";

export const StartBattle = () => {
	const location = useLocation();
	const { history } = useBattleHistory();

	const battleId = location.state?.battleId;
	const battle = history.find((b) => b.id === battleId);

	if (!battle) {
		return (
			<StartBattleContainer>
				<p>Batalha não encontrada.</p>
				<HomeButton />
			</StartBattleContainer>
		);
	}

	return (
		<StartBattleContainer>
			<h2>Batalha</h2>
			<BattleField>
				<div>
					<h3>Você</h3>
					<Card {...battle.player} />
				</div>
				<div>
					<h3>Oponente</h3>
					<Card {...battle.opponent} />
				</div>
			</BattleField>
			<HomeButton />
		</StartBattleContainer>
	);
};
