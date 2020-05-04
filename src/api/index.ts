import {
    apply,
    applyTemplates,
    mergeWith,
    move,
    Rule,
    SchematicContext,
    SchematicsException,
    url
} from '@angular-devkit/schematics';
import { normalize, strings } from "@angular-devkit/core";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export default function (_options: any): Rule {
    return (_, _context: SchematicContext) => {
        if (!_options.name) {
            throw new SchematicsException('Option (name) is required');
        }

        return mergeWith(apply(url('./files'), [
            applyTemplates({
                ...strings,
                name: _options.name,
            }),
            move(normalize(_options.path as string))
        ]))
    };
}
