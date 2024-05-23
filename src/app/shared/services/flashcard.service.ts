import { Injectable } from '@angular/core';
import { Flashcard } from '../flashcard';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { supabaseKey, supabaseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(supabaseUrl,supabaseKey);
  }

  async getFlashcards() {
    let { data, error } = await this.supabase.from('flashcards').select('*');

    if (error) {
      console.error(error);
    }

    return data;
  }

  async addFlashCard(flashcard: Flashcard){
    let { data, error } = await this.supabase.from('flashcards').insert(flashcard);

    if (error) {
      console.error(error);
    }

    return data;
  }

  async updateFlashCard(flashcard: Flashcard){
    let { data, error } = await this.supabase.from('flashcards').update(flashcard).eq('id', flashcard.id);

    if (error) {
      console.error(error);
    }

    return data;
  }

  async deleteFlashCard(id: string){
    let { data, error } = await this.supabase.from('flashcards').delete().eq('id', id);

    if (error) {
      console.error(error);
    }

    return data;
  }
}
