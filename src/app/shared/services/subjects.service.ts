import { Injectable } from '@angular/core';
import { Subject } from '../subject';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/enviroment';

const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(supabaseUrl,supabaseKey);
  }

  async getSubjects()  {
    let { data, error } = await this.supabase.from('subjects').select('*')

    if (error) {
      console.error(error);
    }

    return data;
  }
}
