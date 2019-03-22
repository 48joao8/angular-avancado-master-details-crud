import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: 'Moradia', description: 'Pagamentos de Contas de Casa' },
            { id: 2, name: 'Moradia', description: 'Planos de saúde e Remédios' },
            { id: 3, name: 'Moradia', description: 'Cinema, parques, praia, etc' },
            { id: 4, name: 'Moradia', description: 'Recebimento de Salário' },
            { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' },
        ];

        return { categories }
    }
}