import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { SpeciesSchema } from '../models/Species.js';
import { GalaxySchema } from '../models/Galaxy.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Species = mongoose.model('Species', SpeciesSchema);
  Galaxies = mongoose.model('Galaxies', GalaxySchema);
}

export const dbContext = new DbContext()
