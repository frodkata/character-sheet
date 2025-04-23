import { Item } from "./Item";
import { SpecialItem } from "./SpecialItem";

export interface Inventory {
	items: Item[];
	gold: number;
	specialItems?: SpecialItem[];
}
